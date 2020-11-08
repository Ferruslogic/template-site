/* Fetch API Serve v0.0.1b */
var AppSetting = this;
this.AppSetting.posts = new Array();
const baseUrlPost = './assets/src/data/posts/';
const baseUrlProject = './assets/src/data/projects/';
const baseUrlAPI = 'http://10.16.84.105:8010/apitest/';

/** Posts */
async function API_getPostList() {
    let status = 200;
    var result = await fetch(baseUrlPost + 'postList.json', {
            method: 'GET',
            mode: 'same-origin'
        })
        .then(response => {
            status = response.status;
            return response.json();
        })
        .then(data => {
            saveIntoStorage('posts', data, true);
            return data;
        })
        .catch(error => {
            let inCache = getFromStorage('posts', true);
            if (inCache != null) {
                return inCache;
            };
            return error;
        });

    this.AppSetting.posts = result;
    saveIntoStorage('numPost', result.length);
    return result;
}


function API_ValidatedRoutePost(pPostId) {
    var array = this.AppSetting.posts;
    if (array === undefined) {
        return undefined;
    }
    const even = (element) => element.id == pPostId;
    return array.some(even);
}


function API_getPostView(pPostId) {
    let array = this.AppSetting.posts;
    let folder = "";
    let locales = store.state.language.active;
    let status = 200;

    array.forEach(element => {
        if (element.id === pPostId) {
            folder = element.postFolder;
        }
    });

    if (folder != undefined) {
        pPostId = `${folder + locales}/${pPostId}`;
    };


    const kPostPath = `${baseUrlPost + pPostId}.html`;
    const kPostId = `post-${pPostId}`;
    let tem = [];

    var result = fetch(kPostPath, {
            method: 'GET',
            mode: 'same-origin'
        })
        .then(response => {
            status = response.status;
            return response.text();
        })
        .then(data => {
            saveIntoStorage(kPostId, data, true);
            tem.data = data;
            tem.status = status;
            return tem;
        })
        .catch(error => {
            let inCache = getFromStorage(kPostId, true);
            if (inCache != null && inCache != undefined) {
                return inCache;
            };
            return error;
        });

    if (status === 200) {
        return result;
    } else {
        return null;
    }

}

async function API_getProjectsList() {
    let status = 200;
    var result = await fetch(baseUrlProject + 'projectsList.json', {
            method: 'GET',
            mode: 'same-origin'
        })
        .then(response => {
            status = response.status;
            return response.json();
        })
        .then(data => {
            saveIntoStorage('projects', data, true);
            return data;
        })
        .catch(error => {
            let inCache = getFromStorage('projects', true);
            if (inCache != null) {
                return inCache;
            };
            return error;
        });


    this.AppSetting.posts = result;
    saveIntoStorage('numProjects', result.length);
    return result;
}






async function API_submitEmail(pName, pEmail, pMessage) {
    let status = 200;

    let result = await fetch(`./api/mail.php`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                name: pName,
                email: pEmail,
                message: pMessage,
            })
        })
        .then(response => {
            status = response.status
            return status;
        });

    return result;
};
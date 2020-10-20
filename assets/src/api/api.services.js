/* Fetch API Serve v0.0.1b */
var AppSetting = this;
this.AppSetting.posts = new Array();
const baseUrlPost = './assets/src/data/posts/';

/** Posts */
async function API_getPostList() {
    var result = await fetch(baseUrlPost + 'postList.json', {
            method: 'GET',
            headers: this.headers,
        })
        .then(response => response.json())
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


async function API_getPostView(pPostId) {
    let array = this.AppSetting.posts;
    let folder = ""
    let locales = store.state.language.active;

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

    var result = await fetch(kPostPath, {
            method: 'GET',
            headers: this.headers,
        })
        .then(response => response.text())
        .then(data => {
            saveIntoStorage(kPostId, data, true);
            return data;
        })
        .catch(error => {
            let inCache = getFromStorage(kPostId, true);
            if (inCache != null) {
                return inCache;
            };
            return error;
        });

    return result;
}
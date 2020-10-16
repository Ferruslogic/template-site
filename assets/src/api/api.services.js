/* Fetch API Serve v0.0.1b */
var AppSetting = this;

const baseUrlPost = './assets/src/data/posts/';

/** Locales */
function API_getAppLocale() {

    if (this.browserDetails.language === 'es') {
        return this.AppSetting.languages.es;
    } else {
        return this.AppSetting.languages.en;
    }
}

//  async mounted () {
//     try {
//       const response = await fetch("http://localhost:1337/restaurants", {
//         method: 'GET',
//         headers: this.headers,
//       }).then(this.checkStatus)
//         .then(this.parseJSON);
//         this.restaurants = response
//     } catch (error) {
//       this.error = error
//     }
//   };

//    const allCategories = await fetch("http://localhost:1337/categories", {
//           method: 'GET',
//           headers: this.headers,
//         }).then(this.checkStatus)
//           .then(this.parseJSON);
//           this.allCategories = allCategories
//     } catch (error) {
//       this.error = error
//     };

//   fetch('http://localhost:1337/restaurants', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     name: 'Dolemon Sushi',
//     description: 'Unmissable Japanese Sushi restaurant. The cheese and salmon makis are delicious',
//     categories: [3],
//   }),
// })
//   .then(response => response.json())
//   .then(data => console.log(data));

/* language */
var browserDetails = this;
var locales = "";

var res = navigator.language.split("-");
language = res[0].toLowerCase();
this.browserDetails.language = language;

function activeLanguage(pLanguage) {
    if (pLanguage == null) {
        if (this.browserDetails.language != "es" && this.browserDetails.language != "en") {
            pLanguage = "en";
        };
    };

    saveIntoStorage('language', pLanguage);
};



/** Posts */
async function API_getPostList() {
    var result = await fetch(baseUrlPost + 'post-list.json')
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

    array.forEach(element => {
        if (element.id === pPostId) {
            folder = element.postFolder;
        }
    });

    if (folder != undefined) {
        pPostId = folder + pPostId;
    };

    const kPostPath = `${baseUrlPost + pPostId}.html`;
    const kPostId = `post${pPostId}`;




    var result = await fetch(kPostPath)
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
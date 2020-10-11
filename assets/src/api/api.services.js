/* Fetch API Serve v0.0.1b */

const baseUrlPost = './assets/src/data/posts/';

/** Locales */
function API_getAppLocale() {

    if (this.browserDetails.language === 'es') {
        return this.AppSetting.languages.es;
    } else {
        return this.AppSetting.languages.en;
    }
}


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


    saveIntoStorage('numPost', result.length);
    return result;
}
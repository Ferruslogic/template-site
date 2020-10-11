/* Fetch API Serve v0.0.1b */

const baseUrlPost = './assets/src/data/posts/';

/** Locales */

async function API_getWebLocale() {



    var result = await fetch('./assets/src/locales/locales.json')
        .then(response => response.json())
        .then(data => {
            saveIntoStorage('locales', data, true);
            return data;
        })
        .catch(error => {
            let inCache = getFromStorage(kLocale, true);
            if (inCache !== null) {
                return inCache;
            };
            return null;
        });

    return result;
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
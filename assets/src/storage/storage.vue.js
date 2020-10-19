// VUEX
const state = {
    blog: {
        posts: [],
        currentPage: 0,
        numPage: 0,
        numPost: 0,
        numPostByPage: 0
    },
    language: {
        active: 'en',
        content: []
    }
};


const getters = {
    postActive: state => {
        return state.blog.posts.filter(post => post.active);
    }
};


const mutations = {
    updatePostList: (state, payload) => {
        state.blog.posts = payload;
    },
    setLanguage: (state, payload) => {
        state.language.active = payload.active;
        state.language.content = payload.content;
    }
}


////////////////////////////////////////////////////////////////////////////
let sportStorages = this;

if (!window.applicationCache) {
    sportStorages.sportAppCache = true;
} else {
    sportStorages.sportAppCache = false;
};

if (!window.Storage) {
    sportStorages.sportStorage = true;
} else {
    sportStorages.sportStorage = false;
};

if (!window.indexedDB) {
    sportIndexedDB = true;
} else {
    sportIndexedDB = false;
};


/* Local Storage */
function saveIntoStorage(pKey, pValue, pJson = false) {

    if (pJson === false) {
        localStorage.setItem(pKey, pValue);
    } else {
        localStorage.setItem(pKey, JSON.stringify(pValue));
    };
};


function getFromStorage(pKey, pJson = false) {

    var result = localStorage.getItem(pKey);

    if (pJson === true) {
        result = JSON.parse(result);
    };


    return result;
};

function removeFromStorage(pKey) {

    localStorage.removeItem(pKey);
};

function clearStorage() {
    localStorage.clear();
};


/* Database Index */
var request = window.indexedDB.open("IDB", 3);

request.onsuccess = function(event) {
    var database = event.result;
    // console.error("Database Opened", database);
};
request.onerror = function(e) {
    // console.error(e);
};
/* VUEX */
const state = {
    loaded: true,
    blog: {
        posts: [],
        currentPage: 0,
        numPage: 0,
        numPost: 0,
        numPostByPage: 0
    },
    language: {
        active: 'en',
        texts: []
    },
    menu: {
        icons: [
            'home',
            'book',
            'briefcase-download',
            'account-group',
            'contacts'
        ]
    }
};

const getters = {
    postActive: state => { return state.blog.posts.filter(post => post.active); }
};

const mutations = {
    updatePostList: (state, payload) => {
        state.blog.posts = payload;
    },
    setLanguage: (state, payload) => {
        state.language.active = payload.active;
        state.language.texts = payload.texts;
    },
    loadedPage: (state, payload) => {
        state.loaded = payload;
    }
};

const actions = {
    syncUpdatePostList: ({ commit }, payload) => {
        commit("updatePostList", payload);
    },
    syncSetLanguage: ({ commit }, payload) => {
        commit("setLanguage", payload);
    },
    syncLoadedPage: ({ commit }, payload) => {
        commit('loadedPage', payload);
    }
};

const store = new Vuex.Store({ state, getters, mutations, actions });
const { mapActions, mapGetters, mapState } = Vuex;




function setLoadedPage(pLoaded) {
    if (typeof pLoaded === 'boolean') {
        store.commit('loadedPage', pLoaded);
    } else {
        store.commit('loadedPage', !state.loaded);
    }
    return state.loaded;
};


/**************************************** Filters ***************************************/
function getFilteredByKey(array, key, value) {
    return array.filter(function(e) { return e[key] == value; });
}


/********************************** Local Storage **********************************/
let sportStorages = this;
if (!window.applicationCache) {
    sportStorages.sportAppCache = true;
} else {
    sportStorages.sportAppCache = false;
};
if (!window.Storage) {
    sportStorages.sportStorage = true;
} else { sportStorages.sportStorage = false; };
if (!window.indexedDB) {
    sportIndexedDB = true;
} else {
    sportIndexedDB = false;
};

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
    /* console.error("Database Opened", database);*/
};
request.onerror = function(e) {
    /* console.error(e);*/
};
const state = {
    language: 'EN',
    loadingPage: true,
}

const mutations = {
    updateLanguage: (state, payload) => {
        state.setLanguage = payload
    }
}

const getters = {
    getLanguage: state => {
        return 'TODO: Implementar que devuelva el idioma actual + el del navegador.'
    }
}

const actions = {
    syncUpdateLanguage: ({ commit }, payload) => {
        commit("updateLanguage", payload)
    },
    asyncUpdateLanguage: ({ commit }, payload) => {
        setTimeout(() => {
            commit("updateLanguage", payload)
        }, )
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

const { mapActions, mapGetters } = Vuex;


Vuetify.config.silent = true;



var vm = new Vue({
    el: '#app',
    store,
    router,
    vuetify: new Vuetify({
        theme: {
            dark: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        }

    }),
    data: () => ({
        appName: "FerrusLogic S.A",
        overlay: true,
        systemDark: false
    }),
    template: `
    <div>
        <loading-page :overlay="loadingPage"/>
        <main-layout />
    </div>
    `,
    mounted() {
        // hide the overlay when everything has loaded
        // you could choose some other event, e.g. if you're loading
        // data asynchronously, you could wait until that process returns
        this.overlay = false
    }
});
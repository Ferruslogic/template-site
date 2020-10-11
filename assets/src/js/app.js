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
            dark: false
        }

    }),
    data: () => ({
        appName: "FerrusLogic S.A",
        loadingPage: true,
        overlay: true,
        systemDark: false
    }),

    template: `
    <div>
    <div v-if="loadingPage">
    <loading-page />
    </div>

    <div v-else-if="this.$error" class="alert alert-danger">
      Error al intentar cargar las publicaciones.
    </div>

    <div v-else>
        <main-layout />
    </div>
    </div>
    `,
    mounted() {
        // hide the overlay when everything has loaded
        // you could choose some other event, e.g. if you're loading
        // data asynchronously, you could wait until that process returns
        this.overlay = false;

        //******************************* STARTUP SETTING ***************************************/

        ////////////////////////////////////  Dark Mode ////////////////////////////////////
        let darkActive = window.localStorage.getItem('darkActive');
        window.localStorage.setItem('darkActive', "0");
        if (darkActive === null) {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                window.localStorage.setItem('darkActive', "1");
            } else {
                window.localStorage.setItem('darkActive', "0");
            }
        };

        if (darkActive === "1") {

            this.$vuetify.theme.dark = true;
            window.localStorage.setItem('darkActive', "1");

        } else {

            this.$vuetify.theme.dark = false;
            window.localStorage.setItem('darkActive', "0");
        };

        //////////////////////////////////// Language ////////////////////////////////////




        // setTimeout(() => {
        //     this.loadingPage = false;
        // }, 1500);
        this.loadingPage = false;
        this.$error = false;
    }
});
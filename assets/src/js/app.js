Vuetify.config.silent = true;


var vm = new Vue({
    el: '#app',
    router,
    store,
    vuetify: new Vuetify({
        theme: {
            dark: false
        },
    }),
    template: `
    <div>

    <div v-if="loadingPage">
        <loading-page />
    </div>

    <div v-else>
        <main-layout />
    </div>

    <v-btn v-scroll="onScroll" v-show="fab" fab dark fixed bottom right color="primary" @click="toTop">
        <v-icon>mdi-arrow-up</v-icon>
    </v-btn>

    </div>
    `,

    data: () => ({
        textSearch: "",
        countries: [],
        fab: false
    }),

    methods: {
        ...mapActions([
            'syncSetLanguage',
            'syncLoadedPage'
        ]),
        onClick: function() {
            if (AppSetting.language != 'es') {
                saveIntoStorage('language', 'es');
            } else {
                saveIntoStorage('language', 'en');
            };

            activeLanguage();
        },
        onScroll(e) {
            if (typeof window === 'undefined') return
            const top = window.pageYOffset || e.target.scrollTop || 0
            this.fab = top > 20
        },
        toTop() {
            this.$vuetify.goTo(0)
        }

    },
    beforeCreate() {
        state.loaded = true;
    },
    created() {
        //******************************* STARTUP SETTING ***************************************//
        //////////////////////////////////////  Dark Mode ///////////////////////////////////////
        let darkActive = window.localStorage.getItem('darkActive');

        if (darkActive === null) {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                window.localStorage.setItem('darkActive', "1");
            } else {
                window.localStorage.setItem('darkActive', "0");
            };
        };

        if (darkActive === "1") {
            this.$vuetify.theme.dark = true;
            window.localStorage.setItem('darkActive', "1");

        } else {
            this.$vuetify.theme.dark = false;
            window.localStorage.setItem('darkActive', "0");
        };

        //////////////////////////////////// Language ////////////////////////////////////
        activeLanguage();
    },
    mounted() {
        // hide the overlay when everything has loaded
        // you could choose some other event, e.g. if you're loading
        // data asynchronously, you could wait until that process returns
        this.error = false;
        this.overlay = false;
        setLoadedPage(false);
    },
    computed: {
        ...mapGetters([
            'postActive'
        ]),
        appName: function() {
            return this.$store.state.language.title;
        },
        loadingPage: function() {
            return this.$store.state.loaded;
        }
    }
});
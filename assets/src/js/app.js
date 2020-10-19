Vuetify.config.silent = true;

var vm = new Vue({
    el: '#app',
    router,
    vuetify: new Vuetify({
        theme: {
            dark: false
        }
    }),
    data: () => ({
        loadingPage: true,
        textSearch: "",
        countries: []
    }),
    template: `
    <div>
    <title>{{appName}}</title>

    <div v-if="loadingPage">
    <loading-page />
    </div>

    <div v-else>
        <main-layout />
    </div> 

    </div>
    `,
    methods: {
        onClick: function() {
            if (AppSetting.language != 'es') {
                saveIntoStorage('language', 'es');
            } else {
                saveIntoStorage('language', 'en');
            };

            activeLanguage();
            //this.appName = AppSetting.ActiveLanguage.appName;
        }
    },
    created() {
        //******************************* STARTUP SETTING ***************************************/

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
        //this.appName = AppSetting.ActiveLanguage.appName;

    },
    mounted() {
        // hide the overlay when everything has loaded
        // you could choose some other event, e.g. if you're loading
        // data asynchronously, you could wait until that process returns
        this.error = false;
        this.overlay = false;
        this.loadingPage = false;
    },
    computed: {
        appName: function() {
            return AppSetting.ActiveLanguage.appName;
        }
    }
});
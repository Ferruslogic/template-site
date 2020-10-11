Vuetify.config.silent = true;



var vm = new Vue({
    el: '#app',
    AppSetting,
    router,
    vuetify: new Vuetify({
        theme: {
            dark: false
        },


    }),
    data: () => ({
        appName: "FerrusLogic S.A",
        loadingPage: true,
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
    methods: {
        loadLocate: async function() {
            var it = this;

            try {
                var data = await API_getWebLocale();
                it.AppSetting.Locate = data;



            } catch (error) {
                // pagBlog.error = true
                // console.error("error:", error);
            }
        }
    },
    mounted() {
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



        // hide the overlay when everything has loaded
        // you could choose some other event, e.g. if you're loading
        // data asynchronously, you could wait until that process returns
        this.$error = false;
        this.overlay = false;
        this.loadingPage = false;

    }
});
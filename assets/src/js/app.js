Vuetify.config.silent = true;

Vue.filter('format-thousands', function(value) {
    // https://stackoverflow.com/a/2901298
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
});


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
        textSearch: "",
        countries: []
    }),

    template: `
    <div>
    <title>{{appName}}</title>
      
    <div v-if="loadingPage">
    <loading-page />
    </div>

    <div v-else-if="this.$error" class="alert alert-danger">
      Error al intentar cargar las publicaciones.
    </div>

    <div v-else>
        <main-layout />
    </div> 
<!--    
    <div class="container">
  <div id="app" class="row">
    <div class="col-md-8 col-md-offset-2">
      <input id="input-search" type="text" class="form-control" v-model="textSearch" placeholder='Search...'>
      <div id="list-countries" v-if="countriesFilter && countriesFilter.length">
        <div class="panel panel-default" v-for="country of countriesFilter">
          <div class="panel-heading">
            <img v-bind:src="country.flag" alt="" width="30px">
            <span>{{country.name}}</span>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-md-6">Capital: <strong>{{country.capital}}</strong></div>
              <div class="col-md-6">Region: <strong>{{country.region}}</strong></div>
            </div> 
            <div class="row">
              <div class="col-md-6">Currency: <strong>{{country.currencies[0].name}} ({{country.currencies[0].symbol}})</strong></div>
              <div class="col-md-6">Population: <strong >{{country.population | format-thousands}}</strong></div>
            </div> 
          </div>
        </div>
      </div>
      <div class="text-center" v-else>
        No results!
      </div>
    </div>
  </div>  
</div> -->
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



    },
    mounted() {
        // hide the overlay when everything has loaded
        // you could choose some other event, e.g. if you're loading
        // data asynchronously, you could wait until that process returns
        this.$error = false;
        this.overlay = false;
        this.loadingPage = false;

    },
    computed: {
        countriesFilter: function() {
            var textSearch = this.textSearch;
            return this.countries.filter(function(el) {
                return el.name.toLowerCase().indexOf(textSearch.toLowerCase()) !== -1;
            });
        }
    }
});
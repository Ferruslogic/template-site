Vue.component('frl-hero-texts', {
    template: `
        <div>
            <div class="v-responsive d-flex align-center" 
                style="height: 100%; width: 100%;">
                <div class="v-responsive__content">
                <div id="hero-text">
                    <h1 class="display-1 font-weight mb-4">{{ text1 }}</h1>
                    <p class="lead mb-5">
                    <span  v-html="text2"></span>
                    <kbd>
                        <a class="font-weight-black" href="https://livecode.org/" target="_blank" rel="LiveCode Open Source" style="text-decoration: none !important;color: #FFFFFF;">
                        LiveCode.
                        </a>
                    </kbd>
                    </p>
                    
                </div>
                </div>
            </div>
        </div>
    `,
    data: () => ({
        text1: this.AppSetting.ActiveLanguage.homeTitle,
        text2: this.AppSetting.ActiveLanguage.homeSubTitle,

    }),
    computed: {
        // text1: function() {
        //     var ActiveLanguage = AppSetting.ActiveLanguage.homeTitle;
        //     return AppSetting.ActiveLanguage.homeTitle;
        // }
    }
});


Vue.component('frl-hiro-image', {
    template: `
    <section style="align-self-center; margin-bottom: 330px;" >
        
        <img src="./assets/public/images/lines.svg" id="lines" class="spin position-absolute">
        <img src="./assets/public/images/laptop-mobil.png" id="hero-img" class="position-absolute">
     </section>
    `
});


Vue.component('frl-hero', {
    template: `
    <section id="hero"
    class= "container mx-auto extra-padding">

    <v-row >
    <div class="col-md-6 col-sm-12">
        <v-container class="px-4 py-12 py-sm-4 pt-md-16">
        <v-responsive class="container mx-auto d-flex align-center text-sm-center text-md-left" height="100%" max-width="515" width="100%">
             <frl-hero-texts></frl-hero-texts>
             </v-responsive>
        </v-container>
     </div>

    <div class="col-md-6 col-sm-12 hero-images">
        <v-container class="d-flex align-center" height="100%"  width="100%">
        <frl-hiro-image></frl-hiro-image>
        </v-container>
     </div>    
</v-row>

    </section>
    `
});

/* Button changer to dark mode */
Vue.component('btn-dark-mode', {
    template: `
   <div>
    <v-tooltip v-if="!$vuetify.theme.dark" bottom>
        <template v-slot:activator="{ on }">
            <v-btn v-on="on" color="info" icon raised rounded
             @click="onClick">
                <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
           </v-btn>
        </template>
        <span>Dark Mode On</span>
    </v-tooltip>

    <v-tooltip v-else bottom>
        <template v-slot:activator="{ on }">
            <v-btn v-on="on" color="info"  icon raised rounded
             @click="onClick">
                <v-icon color="yellow">mdi-white-balance-sunny</v-icon>
            </v-btn>
        </template>
        <span>Dark Mode Off</span>
    </v-tooltip>
    </div>             
    `,
    methods: {
        onClick: function() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            if (this.$vuetify.theme.dark) {
                window.localStorage.setItem('darkActive', "1");
            } else {
                window.localStorage.setItem('darkActive', "0");
            };

        }
    }
});



Vue.component("page-not-found", {
    template: "",
    created: function() {
        const newLocal = "./assets/src/templates/my-new-404-page.html";
        // Redirect outside the app using plain old javascript
        // window.location.href = newLocal;
    }
});

Vue.component('progress-linear', {
    template: `
    <div>
    <v-progress-linear
      indeterminate 
      color="orange darken-3"
      rounded
      style="margin-top: -32px;"
    ></v-progress-linear>
    </div>
    `
});

Vue.component('loading-page', {
    template: `
    <div >
    <v-overlay :value="overlay">
      <v-progress-circular  indeterminate :size="70" :width="3">
      <v-img  width="30" src="./assets/public/images/logo.png"/>
      </v-progress-circular>
    </v-overlay>
    </div>
    `,
    props: {
        overlay: true,
    }
});
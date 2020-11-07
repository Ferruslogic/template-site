var pageAbout = {
    template: `
    <div>
   <div class="container text-center">
       <base-page-title
        :title="titlePage"
       />

        <div class="v-responsive mx-auto title font-weight-light mb-8" style="max-width: 720px;"><div class="v-responsive__content">
            Vuetify is the #1 component library for Vue.js and has been in active development since 2016. The goal of the project is to provide users with everything that is needed to build rich and engaging web applications using the Material Design specification. It accomplishes that with a consistent update cycle, Long-term Support (LTS) for previous versions, responsive community engagement, a vast ecosystem of resources and a dedication to quality components.
        </div>

          </div> <div class="v-avatar elevation-12 mb-12" style="height: 128px; min-width: 128px; width: 128px;"><div class="v-image v-responsive theme--light"><div class="v-image__image v-image__image--preload v-image__image--cover" style="background-position: center center;"></div><div class="v-responsive__content"></div></div></div> <div></div> <a href="https://vuetifyjs.com" class="v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--large grey--text"><span class="v-btn__content"><span class="grey--text text--darken-1 font-weight-bold">
              Vuetify Documentation
            </span></span></a></div>
    </div>
`,
    computed: {
        titlePage: function() {
            return this.$store.state.language.texts.aboutPageName;
        }
    }

};
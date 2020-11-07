var pageAbout = {
    template: `
    <div>
        <div class="container text-center">
        <base-page-title
        :title="titlePage"
        />

        <div class="v-responsive mx-auto title font-weight-light mb-8 text-justify"
            style="max-width: 720px;">
                <div class="v-responsive__content">
                    <p v-html="textAbout"></p>
                </div>
        </div>


        <div class="v-avatar elevation-12 mb-12" style="height: 128px; min-width: 128px; width: 128px;"><div class="v-image v-responsive theme--light"><div class="v-image__image v-image__image--preload v-image__image--cover" style="background-position: center center;"></div><div class="v-responsive__content"></div></div></div> <div></div> <a href="https://vuetifyjs.com" class="v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--large grey--text"><span class="v-btn__content"><span class="grey--text text--darken-1 font-weight-bold">
                Vuetify Documentation
            </span></span></a></div>
    </div>
`,
    computed: {
        locate: function() {
            return this.$store.state.language.active == 'es';
        },
        titlePage: function() {
            return this.$store.state.language.texts.aboutPageName;
        },
        textAbout: function() {
            return this.$store.state.language.texts.textAbout;
        }
    }

};
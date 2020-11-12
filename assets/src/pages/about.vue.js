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


        <base-page-title
            :title="textTeam"
        />


        <div class="container">
            <div class="row justify-center">
                <div class="col-md-3 col-12">
                    <div class="text-center">
                        <v-avatar  color="primary" size="128">
                            <img
                                src="/assets/public/images/avatar-prometheus.jpg"
                                alt="avatar"
                            >
                        </v-avatar>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title class="title">
                                    Prometheus
                                </v-list-item-title>

                                <v-list-item-subtitle>
                                    {{ softwareDeveloper }}
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </div>
                </div>

                <div class="col-md-3 col-12">
                    <div class="text-center">
                        <v-avatar  color="primary" size="128">
                            <img
                                src="/assets/public/images/avatar-kamikaze.jpg"
                                alt="avatar"
                            >
                        </v-avatar>

                        <v-list-item>

                            <v-list-item-content>
                                <v-list-item-title class="title">
                                    Kamikaze
                                </v-list-item-title>

                                <v-list-item-subtitle>
                                    {{ softwareDeveloper }}
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </div>
                </div>
            </div>
        </div>

            <base-separator />

        <a href="#/contact"  @click="toTop" class="v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--large grey--text">
        <span class="v-btn__content">
            <span class="grey--text text--darken-1 font-weight-bold">
                {{ contactUs }}
            </span>
        </span>
        </a>

        </div>
    </div>
`,
    methods: {
        toTop() {
            this.$vuetify.goTo(0)
        }
    },
    computed: {
        locate: function() {
            return this.$store.state.language.active == 'es';
        },
        titlePage: function() {
            return this.$store.state.language.texts.aboutPageName;
        },
        textAbout: function() {
            return this.$store.state.language.texts.textAbout;
        },
        textTeam: function() {
            return this.$store.state.language.texts.textTeam;
        },
        softwareDeveloper: function() {
            return this.$store.state.language.texts.softwareDeveloper;
        },
        contactUs: function() {
            return this.$store.state.language.texts.contactPageName;
        }
    }

};
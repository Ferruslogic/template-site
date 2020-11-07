Vue.component('base-grid-product', {
    template: `
    <div>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
      <v-img
        :aspect-ratio="16/9"
        :src="imageURL"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            $ {{price}}
          </div>
        </v-expand-transition>
      </v-img>

      <v-card-text
        class="pt-4"
        style="position: relative;"
      >


        <div class="font-weight-light grey--text title mb-2">
          {{ softwareTag }}
        </div>

        <h3 class="display-1 font-weight-light orange--text mb-2">
          {{ softwareName }}
        </h3>

        <div class="font-weight-light grey--text  title mb-2">
          {{ description }}
        </div>

      </v-card-text>

      <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon :href="documentLink" target="_blank">
                <v-icon style="color: #ff7800;">mdi-file-document</v-icon>
              </v-btn>

              <v-btn icon :href="codeLink" target="_blank">
                <v-icon style="color: #ff7800;">mdi-github</v-icon>
              </v-btn>

              <v-btn icon :href="downloadLink" target="_blank">
                <v-icon style="color: #ff7800;">mdi-archive-arrow-down</v-icon>
              </v-btn>

              </v-card-actions>
    </v-card>
  </v-hover>
  </div>
  `,
    props: {
        imageURL: {
            type: String,
            default: "assets/public/images/logo.png"
        },
        price: {
            type: String,
            default: "00.00"
        },
        description: {
            type: String,
            default: "description"
        },
        softwareTag: {
            type: String,
            default: "software-Tag"
        },
        softwareName: {
            type: String,
            default: "software-Name"
        },
        downloadLink: {
            type: String,
            default: "#"
        },
        codeLink: {
            type: String,
            default: "#"
        },
        documentLink: {
            type: String,
            default: "#"
        }
    }
});

var pageSoftware = {
    template: `
    <div>
    <v-item-group>
    <v-container>
      <v-row>
        <v-col v-for="(product, index) in products"
          :key ="index"
          cols="12"md="4" sm="6" >
            <v-item>
              <v-lazy>
                  <v-hover v-slot:default="{ hover }"
                    open-delay="200">

                      <base-grid-product
                        :softwareName ="product.id"
                        :price ="product.price"
                        :description ="product.en.description"
                        :softwareTag ="product.en.Tag"
                        :documentLink ="product.en.docLink"
                        :codeLink ="product.repoLink"
                        :downloadLink ="product.downloadLink"

                      />

                  </v-hover>
                </v-lazy>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
    </div>
    `,

    data: () => ({
        error: false,
        products: [],
    }),

    created: function() {

        setLoadedPage(true);
        this.projectsList();

    },

    methods: {
        ...mapActions([
            'syncSetLanguage',
            'syncLoadedPage'
        ]),

        projectsList: async function() {
            var it = this;
            try {
                var data = await API_getProjectsList();
                it.products = data;
            } catch (error) {

            };
        }
    },

    mounted() {
        setLoadedPage(false);
    },

    computed: {
        locate: function() {
            return this.$store.state.language.active == 'es';
        },
        loading: function() {
            return this.$store.state.loaded
        }
    }
};
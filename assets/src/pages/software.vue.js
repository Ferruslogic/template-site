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
            Price {{price}}
          </div>
        </v-expand-transition>
      </v-img>

      <v-card-text
        class="pt-4"
        style="position: relative;"
      >

        <v-btn
              absolute
              color="orange"
              class="white--text"
              fab
              large
              right
              top
              >
                <v-icon>mdi-cart</v-icon>
        </v-btn>

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

              <v-btn icon>
                <v-icon style="color: #ff7800;">mdi-file-document</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon style="color: #ff7800;">mdi-github</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon style="color: #ff7800;">mdi-share-variant</v-icon>
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
            default: "Free"
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
        downloadLink: String,
        codeLink: String,
        documentLink: String
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
                  <div v-if="loading">


                      <base-grid-product />


                    </div>
                    <div v-else>

                      <base-grid-product />


                  </div>
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
        this.postsList();

    },

    methods: {
        ...mapActions([
            'syncSetLanguage',
            'syncLoadedPage'
        ]),

        postsList: async function() {
            var it = this;
            try {
                var data = await API_getPostList();
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
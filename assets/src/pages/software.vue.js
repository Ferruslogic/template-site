var pageSoftware = {
    template: `
    <div>

    <base-page-title
      :title="titlePage"
    />

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
        },
        titlePage: function() {
            return this.$store.state.language.texts.projectsPageName;
        }
    }
};
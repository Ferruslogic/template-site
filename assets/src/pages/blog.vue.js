Vue.filter('format-thousands', function(value) {
    // https://stackoverflow.com/a/2901298
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
});

var pagBlog = {
    template: `
    <div>

    <div v-if="loadingPage">
    <progress-linear />
    </div>

    <!-- <div v-else-if="error" class="alert alert-danger">
      Error al intentar cargar las publicaciones.
    </div> -->

    <div v-else>

  <template>
    <v-item-group>
    <v-container>
      <v-row>
        <v-col v-for="(post, index) in posts"
          :key ="index"
          cols="12"md="4" sm="6" >
            <v-item>
              <v-lazy>
                  <v-hover v-slot:default="{ hover }"
                    open-delay="200">
                      <base-grid-post  ripple
                        :title="post.title"
                        :thumbnail="post.thumbnail"
                        :postLink="'/blog/' + post.id"
                        :content="post.content"
                   />
                  </v-hover>
                </v-lazy>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
    </template>
    </div>
    </div>
    `,
    data: () => ({
        loadingPage: true,
        error: false,
        textSearch: "",
        posts: []
    }),
    computed: {
        countriesFilter: function() {
            var textSearch = this.textSearch;
            return this.countries.filter(function(el) {
                return el.name.toLowerCase().indexOf(textSearch.toLowerCase()) !== -1;
            });
        }
    },

    created: function() {
        this.postsList();
    },

    methods: {
        postsList: async function() {
            var it = this;

            try {
                var data = await API_getPostList();
                it.loadingPage = false;
                it.posts = data;


            } catch (error) {
                // pagBlog.error = true
                // console.error("error:", error);
            }
        }
    }


};
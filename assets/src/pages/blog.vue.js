var pagBlog = {
    template: `
    <div>
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
    `,
    data: () => ({
        error: false,
        posts: [],
        loaded: false
    }),
    created: function() {
        setLoadedPage(true);
        this.postsList();

    },
    methods: {
        ...mapActions([
            'syncSetLanguage',
            'syncLoadedPage',
            'updatePostList'
        ]),
        postsList: async function() {
            var it = this;
            try {
                var data = await API_getPostList();
                it.posts = data;
                store.commit('updatePostList', data);
            } catch (error) {
                /*
                pagBlog.error = true
                */
            };

        }
    },
    mounted() {
        setLoadedPage(false);
    }


};
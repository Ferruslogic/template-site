var pagBlog = {
    template: `
    <div>

    <div v-if="cargando">
   

    <v-progress-circular
      :size="50"
      color="amber"
      indeterminate
    ></v-progress-circular>
    </div>

    <div v-else-if="error" class="alert alert-danger">
      Error al intentar cargar las publicaciones.
    </div>

    <div v-else>
    <div class="title"> Blog </div>
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
           :postLink="'/blog/'+post.id"
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
        cargando: true,
        error: false,
        posts: [],
        pokemon: []
    }),
    created: function() {
        this.postsList();
        this.postLista2();
    },
    methods: {
        postsList: function() {
            var that = this;
            axios.get('http://192.168.83.32:8010/v/assets/src/data/posts/post-list.json', {
                    crossdomain: true
                })
                .then(function(response) {
                    that.cargando = false;
                    that.posts = response.data;
                })
                .catch(function(error) {
                    that.cargando = false;
                    that.error = true;
                });
            return that;
        }
    }

};
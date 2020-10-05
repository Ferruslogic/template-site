Vue.prototype.$http = axios

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

   
    <button v-on:click="getRequest(postsList.id)">Get</button>

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
    props: {
        postsList: Array
    },
    data: () => ({
        /* ToDo: La lista de post se las pide a el api, esto es para probar */
        posts: [{
                id: 'noticia-1',
                title: 'Noticia 1',
                content: 'Lorem ipsum dolor sit amet 1',
                thumbnail: './assets/public/images/posts/00/_thumbnail.jpg'
            },
            {
                id: 'noticia-2',
                title: 'Noticia 2',
                content: 'Lorem ipsum dolor sit amet 2',
                thumbnail: './assets/public/images/posts/00/_thumbnail.jpg'
            },
            {
                id: 'noticia-3',
                title: 'Noticia 3',
                content: 'Lorem ipsum dolor sit amet 3',
                thumbnail: './assets/public/images/posts/00/_thumbnail.jpg'
            },
            {
                id: 'noticia-4',
                title: 'Noticia 4',
                content: 'Lorem ipsum dolor sit amet 4',
                thumbnail: './assets/public/images/posts/00/_thumbnail.jpg'
            }
        ],
        cargando: true,
        error: false,
        posts: [],
        pokemon: []
    }),
    created: function() {
        this.recuperarPosts();
    },
    methods: {

        recuperarPosts: function() {
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
        }
    }

};
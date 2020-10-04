var pagBlog = {
    template: `
    <div>
    <div class="title">Blog</div>

<template>
  <v-item-group>
    <v-container>
      <v-row>
        <v-col v-for="(post, index) in posts"
        :key ="index"
         cols="12"md="4" sm="6" >         
          <v-item>
           <base-grid-post  
           :title="post.title"
           :thumbnail="post.thumbnail"
           :postLink="post.postLink"
           :content="post.content"
         />
            </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template> 
    </div>
    `,
    data: () => ({
        /* ToDo: La lista de post se las pide a el api, esto es para probar */
        posts: [
            { id: 'noticia-1', title: 'Noticia 1', content: 'Lorem ipsum dolor sit amet 1', postLink: '#', thumbnail: './assets/public/images/posts/00/_thumbnail.jpg' },
            { id: 'noticia-2', title: 'Noticia 2', content: 'Lorem ipsum dolor sit amet 2', postLink: '#', thumbnail: './assets/public/images/posts/00/_thumbnail.jpg' },
            { id: 'noticia-3', title: 'Noticia 3', content: 'Lorem ipsum dolor sit amet 3', postLink: '#', thumbnail: './assets/public/images/posts/00/_thumbnail.jpg' },
            { id: 'noticia-4', title: 'Noticia 4', content: 'Lorem ipsum dolor sit amet 4', postLink: '#', thumbnail: './assets/public/images/posts/00/_thumbnail.jpg' }
        ]
    })

};
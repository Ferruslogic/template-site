var pagBlog = {
    template: `
    <div>
    <div class="title">Blog</div>

<li v-for="post in posts">
    <h2><router-link v-bind:to="'/blog/'+post.id">{{post.title}}</router-link></h2>
    <template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
</li>
    </div>
    `,
    data: () => ({
        /* ToDo: La lista de post se las pide a el api, esto es para probar */
        posts: [
            { id: 'noticia-1', title: 'Noticia 1', content: 'Lorem ipsum dolor sit amet 1' },
            { id: 'noticia-2', title: 'Noticia 2', content: 'Lorem ipsum dolor sit amet 2' },
            { id: 'noticia-3', title: 'Noticia 3', content: 'Lorem ipsum dolor sit amet 3' },
            { id: 'noticia-4', title: 'Noticia 4', content: 'Lorem ipsum dolor sit amet 4' }
        ],
        show: false
    })

};
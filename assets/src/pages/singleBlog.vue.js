var singleBlog = {
    template: `
    <div> <div class="title">Post</div>
    <v-hover>
    <v-card
      slot-scope="{ hover }"
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
      <v-img
        :aspect-ratio="16/9"
        src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            $14.99
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
        <div class="font-weight-light grey--text title mb-2">For the perfect meal</div>
        <h3 class="display-1 font-weight-light orange--text mb-2">QW cooking utensils</h3>
        <div class="font-weight-light title mb-2">
          Our Vintage kitchen utensils delight any chef.<br>
          Made of bamboo by hand
        </div>
      </v-card-text>
    </v-card>
  </v-hover>

  <li v-for="post in posts">
    <h2><router-link v-bind:to="'/blog/'+post.id">{{post.title}}</router-link></h2>
</li>
  </div>
    `,
    data() {
        return {
            posts: [

                { id: 'noticia-1', title: 'Noticia 1', content: 'Lorem ipsum dolor sit amet 1' },
                { id: 'noticia-2', title: 'Noticia 2', content: 'Lorem ipsum dolor sit amet 2' },
                { id: 'noticia-3', title: 'Noticia 3', content: 'Lorem ipsum dolor sit amet 3' },
                { id: 'noticia-4', title: 'Noticia 4', content: 'Lorem ipsum dolor sit amet 4' }

            ]
        }
    }
};
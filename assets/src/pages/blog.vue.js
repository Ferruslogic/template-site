var pagBlog = {
    template: `
    <div>
    <div class="title">Blog</div>
    <router-link to="/about">About us</router-link>
        <v-card class="elevation-2">
    <v-card-title class="headline"> Etre heureux</v-card-title>
    <v-card-text>
      Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
    </v-card-text>
  </v-card>
</v-timeline-item>
</v-timeline>

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
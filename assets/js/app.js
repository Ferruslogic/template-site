Vue.use(VueRouter)


let component1 = {
    template: `
    <div>
  <div  class="title">Inicio</div>
    
        <blockquote class="blockquote">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.</blockquote>

        <v-timeline>
    <v-timeline-item
      v-for="n in 4"
      :key="n"
      color="red lighten-2"
      large
    >
      <template v-slot:opposite>
        <span>Tus eu perfecto</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">Lorem ipsum</v-card-title>
        <v-card-text>
          Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
    </div>
    `
}
let component2 = {
    template: `
    <div> 
    <div class="title">Blog</div>
    <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.</p>
  </div>
    </div>
    `
}

let component3 = {
    template: `
    <div> <div class="title">Softwares</div>
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

    </div>
    `
}

let router = new VueRouter({
    routes: [{
        path: '/',
        component: component1,
    }, {
        path: '/blog',
        component: component2,
    }, {
        path: '/softwares',
        component: component3,
    }, {
        path: '*',
        redirect: '/'
    }]
})

new Vue({
        el: '#app',
        router,
        vuetify: new Vuetify(),
        data: () => ({
            icons: ['home', 'book', 'archive-arrow-down'],
            drawer: false,
            appName: "FerrusLogic S.A"
        })
    },
    Vue.use(Vuetify, {
        theme: {
            primary: '#C0D8D8',
            secondary: '#D8F0F0',
            accent: '#303030',
            error: '#F72A38',
            warning: '#F5E582',
            info: '#F0F0F0',
            success: '#789078'
        }
    }))
var vItemMenu = [{
        label: 'Home',
        path: '/'
    },
    {
        label: 'Blog',
        path: '/blog'
    },
    {
        label: 'Projects',
        path: '/software'
    },
    {
        label: 'About',
        path: '/about'
    },
    {
        label: 'Contact',
        path: '/contact'
    },
]

Vue.use(VueRouter)




let router = new VueRouter({
    routes: [{
        path: '/',
        component: pageHome,
    }, {
        path: '/blog',
        component: pagBlog,
    }, {
        path: '/software',
        component: pageSoftware,
    }, {
        path: '/about',
        component: pageAbout,
    }, {
        path: '/contact',
        component: pageContact,
    }, {
        path: '*',
        redirect: '/'
    }]
})

Vuetify.config.silent = true


// Menu
Vue.component('base-menu', {
    template: `
  <div>
        <div class="d-none d-md-block mr-3">    
        <v-btn class="subtitle-1 text-capitalize font-weight-light" text flat
             v-for="(menuitem, index) in menuitems"
                :key ="index"
                :to="menuitem.path"  >
                {{ menuitem.label }}
        </v-btn>
            
        </div>
  </div>
    `,
    data: () => ({
        icons: ['home', 'book', 'briefcase-download', 'account-group', 'contacts'],
        menuitems: vItemMenu,
        systemDark: false,

    })
})




// Drawer of app
Vue.component('base-drawer', {
    template: `
    <div>
    <v-navigation-drawer 
        bottom
        color="transparent"
        fixed
        height="auto"
        overlay-color="secondary"
        overlay-opacity=".8"
        temporary
        v-bind="$attrs"
        v-on="$listeners">
        <v-img :aspect-ratio="7/3" :src="imageMenuPath" />

        <v-list shaped>
      
            <v-list-item
             v-for="(item, index) in items"
            :key="index"
            :to="item.path">
            
            <v-list-item-action>
                <v-icon>mdi-{{ icons[index] }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                <v-list-item-title>item.label</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

        </v-list>

        </v-navigation-drawer>
    </div>
    `,
    computed: {
        imageMenuPath: function() {
            if (this.$vuetify.theme.dark) {
                return './assets/public/images/bg-menu-black.png';
            }
            return './assets/public/images/bg-menu.png';
        }
    },
    data: () => ({
        icons: ['home', 'book', 'briefcase-download', 'account-group', 'contacts'],
        drawer: false,
        items: vItemMenu
    }),
})



// Footer of app
Vue.component('base-footer', {
    template: `
    <div class="pa-8">
        
    <v-footer id="home-footer" min-height="72">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
        <div class="d-flex flex-wrap justify-md-start justify-center">
            <div v-for="(s, i) in social">
            <a :href="s.url" target="_blank" :rel="s.label">
            <v-tooltip top :key="i"  class="pa-1 pa-md-0 mr-4">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on" x-large>
                    
                    <v-icon color="grey lighten-1">
                         {{s.icon}}
                    </v-icon>
                    </v-btn>
                </template>
                <span>{{ s.label}}</span>
            </v-tooltip>
            </a>
               
              </v-responsive>
              </div>
              </div>
        </v-col>

        <v-col
          class="text-center text-md-right"
          cols="12"
          md="6"
        >
          Copyright &copy; {{ new Date().getFullYear() }} FerrusLogic S.A
        </v-col>
        </v-row>
        </v-container>
    </v-footer>
    </div>
    `,
    data: () => ({
        social: [{
                label: 'FerrusLogic in Facebook',
                icon: 'mdi-facebook',
                url: '#'
            },
            {
                label: 'FerrusLogic in GitHub',
                icon: 'mdi-github',
                url: 'https://github.com/Ferruslogic/'
            }
        ],
    }),
})















new Vue({
    el: '#app',
    router,
    vuetify: new Vuetify({
        theme: {
            dark: false
        }

    }),
    data: () => ({
        appName: "FerrusLogic S.A",
        systemDark: false,

    }),
    computed: {
        logoPath: function() {
            if (this.$vuetify.theme.dark) {
                return './assets/public/images/logo-Ferrus-Logic-white.svg';
            }
            return './assets/public/images/logo-Ferrus-Logic.svg';
        },
        darkMode: function() {
            return this.$vuetify.theme.dark;
        },
    },
    template: `
    <div>
    <v-app>
        <div>
            <base-drawer />

                <v-app-bar class="white--text v-sheet v-toolbar v-app-bar v-app-bar--elevate-on-scroll v-app-bar--fixed v-app-bar--hide-shadow" app clipped-left flat>
                  <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />

          
                    <v-img class="mx-2" :src="logoPath" max-height="90" max-width="190" contain></v-img>

        
                    <v-spacer></v-spacer>

                    <base-menu />


                   
                    <div>
                        <v-tooltip v-if="!darkMode" bottom>
                            <template v-slot:activator="{ on }">
                                <v-btn v-on="on" color="info" small fab
                                    @click="$vuetify.theme.dark = !$vuetify.theme.dark">
                                    <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
                                </v-btn>
                            </template>
                            <span>Dark Mode On</span>
                        </v-tooltip>

                        <v-tooltip v-else bottom>
                            <template v-slot:activator="{ on }">
                                <v-btn v-on="on" color="info" small fab
                                    @click="$vuetify.theme.dark = !$vuetify.theme.dark">
                                    <v-icon color="yellow">mdi-white-balance-sunny</v-icon>
                                </v-btn>
                            </template>
                            <span>Dark Mode Off</span>
                        </v-tooltip>

                    </div>
                  

                </v-app-bar>
            </div>


    <v-main class="v-main v-content">
    <v-container fluid>
        <v-fade-transition mode="out-in">
            <router-view />
        </v-fade-transition>
    </v-container>
    </v-main>

  <base-footer />
</v-app>
    </div>
    `
})
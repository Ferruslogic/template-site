/* Menu */
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
});


/* Drawer of app */
Vue.component('base-drawer', {
    template: `
    <div  class="sticky-top" style="max-width: 256px;min-width: 200px;width: 75%;">
    <v-navigation-drawer 
        left
        fixed
        temporary
        d-flex align-stretch
        overlay-color="secondary" 
        overlay-opacity=".8" 
        v-bind="$attrs"
        v-on="$listeners"
        clipped app
        >
      <v-img :aspect-ratio="7/3" :src="imageMenuPath" :lazy-src="imageLazyMenuPath" />

        <v-list shaped>
      
            <v-list-item
             v-for="(item, index) in items"
            :key="index"
            :to="item.path">
            
            <v-list-item-action>
                <v-icon>mdi-{{ icons[index] }}</v-icon>
                </v-list-item-action>
                
                <v-list-item-content>
                <v-list-item-title>{{ item.label }}</v-list-item-title>
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
        },
        imageLazyMenuPath: function() {
            if (this.$vuetify.theme.dark) {
                return './assets/public/images/Lazy/bg-menu-black.png';
            }
            return './assets/public/images/Lazy/bg-menu.png';
        }
    },
    data: () => ({
        icons: ['home', 'book', 'briefcase-download', 'account-group', 'contacts'],
        items: vItemMenu
    }),
});


/* Button changer to dack mode */
Vue.component('btn-darck-mode', {
    template: `
   <div>
    <v-tooltip v-if="!$vuetify.theme.dark" bottom>
        <template v-slot:activator="{ on }">
            <v-btn v-on="on" color="info" icon raised rounded
             @click="$vuetify.theme.dark = !$vuetify.theme.dark">
                <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
           </v-btn>
        </template>
        <span>Dark Mode On</span>
    </v-tooltip>

    <v-tooltip v-else bottom>
        <template v-slot:activator="{ on }">
            <v-btn v-on="on" color="info"  icon raised rounded
             @click="$vuetify.theme.dark = !$vuetify.theme.dark">
                <v-icon color="yellow">mdi-white-balance-sunny</v-icon>
            </v-btn>
        </template>
        <span>Dark Mode Off</span>
    </v-tooltip>
    </div>             
    `
});



/*  App top bar */
Vue.component('base-app-top-bar', {
    template: `
     <div>
        <div id="top-bar">
            <v-app-bar elevate-on-scroll
                class="overflow-y-auto v-app-bar--fixed "
                style="z-index: 1008;">

                <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />

                <v-img class="mx-2" :src="logoPath" max-height="90" max-width="190" contain></v-img>

                <v-spacer></v-spacer>

                <base-menu />
                <btn-darck-mode class="d-none d-md-block"/>

            </v-app-bar>
        </div>
        <base-drawer v-model="drawer" id="base-drawer-mobile" />
    </div>
    `,
    data: () => ({
        drawer: null
    }),
    computed: {
        logoPath: function() {
            if (this.$vuetify.theme.dark) {
                return './assets/public/images/logo-Ferrus-Logic-white.svg';
            }
            return './assets/public/images/logo-Ferrus-Logic.svg';
        },
    }
});



/* Footer of app */
Vue.component('base-footer', {
    template: `
    <div>
        
    <v-footer id="home-footer" min-height="72" d-block pa-2>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
        <div class="d-flex flex-wrap justify-md-start justify-center">
            <div v-for="(s, i) in social">
            <a :href="s.url" target="_blank" :rel="s.label">
            <v-tooltip top :key="i"  class="pa-1 pa-md-0 mr-4">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn class="mx-1" icon v-bind="attrs" v-on="on" x-large>
                    
                    <v-icon color="grey lighten-1">
                         {{s.icon}}
                    </v-icon>
                    </v-btn>
                    <slot />
                    <v-spacer></v-spacer><v-spacer></v-spacer>
                </template>
                <span>{{ s.label}}</span>
                <v-spacer></v-spacer>
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
});
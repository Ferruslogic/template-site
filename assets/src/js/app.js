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


// Menuitem component

Vue.component('menu-item', {
    props: ['label', 'path'],
    template: `
    <v-btn :to="path" class="subtitle-1 text-capitalize font-weight-light" text flat>
      {{label}}
    </v-btn>
    `
})



Vue.component('frl-base-top-barra', {
    template: `
    

    `
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
        icons: ['home', 'book', 'briefcase-download', 'account-group', 'contacts'],
        drawer: false,
        appName: "FerrusLogic S.A",
        menuitems: [{
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
        ],
        systemDark: false,

    }),
    computed: {
        logoPath: function() {
            if (this.$vuetify.theme.dark) {
                return './assets/public/images/logo-Ferrus-Logic-white.svg';
            }
            return './assets/public/images/logo-Ferrus-Logic.svg';
        },
        imageMenuPath: function() {
            if (this.$vuetify.theme.dark) {
                return './assets/public/images/bg-menu-black.png';
            }
            return './assets/public/images/bg-menu.png';
        },
        darkMode: function() {
            return this.$vuetify.theme.dark;
        },
    },
    template: `
    <div>
    <v-app>

    <div id="top-bar">

                <v-navigation-drawer v-model="drawer" absolute clipped temporary app class="sticky-top">
                    <v-img :aspect-ratio="7/3" :src="imageMenuPath">

                    </v-img>

                    <v-list>
                        <v-list-item :to="{path: '/'}">
                            <v-list-item-action>
                                <v-icon>mdi-{{ icons[0] }}</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title>Home</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item :to="{path: '/blog'}">
                            <v-list-item-action>
                                <v-icon>mdi-{{ icons[1] }}</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title>Blog</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item :to="{path: '/software'}">
                            <v-list-item-action>
                                <v-icon>mdi-{{ icons[2] }}</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title>Projects</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item :to="{path: '/about'}">
                            <v-list-item-action>
                                <v-icon>mdi-{{ icons[3] }}</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title>About</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item :to="{path: '/contact'}">
                            <v-list-item-action>
                                <v-icon>mdi-{{ icons[4] }}</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title>Contact</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>

                    <v-spacer></v-spacer>
                </v-navigation-drawer>


                <v-app-bar class="white--text v-sheet v-toolbar v-app-bar v-app-bar--elevate-on-scroll v-app-bar--fixed v-app-bar--hide-shadow" app clipped-left flat>
                  <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />

          
                    <v-img class="mx-2" :src="logoPath" max-height="90" max-width="190" contain></v-img>

        
                    <v-spacer></v-spacer>

           
                    <div class="d-none d-md-block mr-3">
                        <menu-item v-for="(menuitem, index) in menuitems" :key ="index" :path="menuitem.path" :label="menuitem.label">
                        </menu-item>
                    </div>



                   
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
            <router-view></router-view>
        </v-fade-transition>
    </v-container>
    </v-main>

    <v-footer class="pa-8">
    <v-layout justify-center row wrap>

        <div> {{appName}} &copy; {{ new Date().getFullYear() }} </div>
    </v-layout>
</v-footer>
</v-app>
    </div>
    `
})
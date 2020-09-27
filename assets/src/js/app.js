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
        setDarkMode: function() {

        }
    },
})
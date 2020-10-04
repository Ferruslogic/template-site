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
];


Vue.use(VueRouter);



// Rutas
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
});

Vuetify.config.silent = true;



var app = new Vue({
    el: '#app',
    router,
    vuetify: new Vuetify({
        theme: {
            dark: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        }

    }),
    data: () => ({
        appName: "FerrusLogic S.A",
        systemDark: false
    }),
    computed: {
        modoOscuro: function() {
            return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
    },
    template: `
        <main-layout />
    `
});
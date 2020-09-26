Vue.use(VueRouter)


let router = new VueRouter({
    routes: [{
        path: '/',
        component: pageHome,
    }, {
        path: '/blog',
        component: pagBlog,
    }, {
        path: '/softwares',
        component: pageSoftwares,
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

new Vue({
    el: '#app',
    router,
    vuetify: new Vuetify({
        theme: {
            dark: false,
        }






    }),
    data: () => ({
        icons: ['home', 'book', 'briefcase-download', 'account-group', 'contacts'],
        drawer: false,
        appName: "FerrusLogic S.A",

    })
}, )
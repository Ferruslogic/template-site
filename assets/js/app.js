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


new Vue({
        el: '#app',
        router,
        vuetify: new Vuetify(),
        data: () => ({
            icons: ['home', 'book', 'briefcase-download', 'account-group', 'contacts'],
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
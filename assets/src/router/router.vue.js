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



// Router
let router = new VueRouter({
    routes: [{
        path: '/',
        component: pageHome,
    }, {
        path: '/blog',
        component: pagBlog,
    }, {
        path: '/blog/:id',
        component: singleBlog
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
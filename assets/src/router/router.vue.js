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
        name: 'home',
        component: pageHome,
    }, {
        path: '/blog',
        name: 'blog',
        component: pagBlog,
    }, {
        path: '/blog/:id',
        name: 'post',
        component: singleBlog
    }, {
        path: '/software',
        name: 'software',
        component: pageSoftware,
    }, {
        path: '/about',
        name: 'about',
        component: pageAbout,
    }, {
        path: '/contact',
        name: 'contact',
        component: pageContact,
    }, {
        path: '*',
        redirect: '/',
        component: pageHome
    }]
});
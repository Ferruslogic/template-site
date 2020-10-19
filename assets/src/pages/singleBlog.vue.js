var singleBlog = {
    template: `
   <div class="container fluid px-0"> 
        <span v-html="html"></span>
    </div>
    `,
    data: () => ({
        html: '',
    }),
    created: function() {
        this.getPost(this.$route.params.id);
    },
    methods: {
        getPost: async function(id) {
            var it = this;
            try {
                var data = await API_getPostView(id);
                it.html = data;
            } catch (error) {
                pagBlog.error = true
                console.error("error:", error);
            }
        }
    },
    beforeRouteEnter(to, from, next) {
        const validatedRoute = API_ValidatedRoutePost(to.params.id);
        if (validatedRoute === true || validatedRoute === false) {
            next(validatedRoute);
        } else {
            router.push('/');
        }

    },
    beforeRouteUpdate(to, from, next) {
        const validatedRoute = API_ValidatedRoutePost(to.params.id);

        if (validatedRoute === true || validatedRoute === false) {
            if (validatedRoute === true) {
                next();
            } else {
                router.push('/blog');
            }

        } else {
            router.push('/');
        };

    }
};
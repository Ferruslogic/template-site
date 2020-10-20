var htmlPost = this;

var singleBlog = {
    template: `
    <div>
        <div v-if="error">
        <v-alert 
                border="left"
                colored-border
                type="error"
                elevation="2"
                prominent
            >
            <p v-html="htmlNfp"> </p>
            </v-alert>
        </div>
    
    <div v-else class="container fluid px-0"> 
        <span v-html="html"></span>
    </div>

    </div>
    `,
    data: () => ({
        error: false,
        html: ''
    }),
    created: function() {
        this.getPost(this.$route.params.id);
    },
    methods: {
        getPost: function(id) {
            try {
                var data = API_getPostView(id).then(res => {
                    this.html = res.data;
                    this.error = (res.status === 404);
                });
            } catch (error) {
                this.error = true;
                return null;
            }
        }
    },
    watch: {
        '$store.state.language.active' (value, oldValue) {
            this.getPost(this.$route.params.id);
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

    },
    computed: {
        htmlNfp: function() {
            return this.$store.state.language.texts.postNotFound
        }
    }
};
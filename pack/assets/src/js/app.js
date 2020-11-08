/* Menu */
Vue.component('base-menu', {
    template: `
        <div>
            <div class="d-none d-md-block mr-3">
                <v-btn class="subtitle-1 text-capitalize font-weight mx-1"
                text flat v-for="(menuitem, index) in menuItems"
                :key ="index"
                :to="menuitem.path">
                    {{ menuitem.label }}
                </v-btn>

                <changer-language />
            </div>
        </div> `,
    computed: {
        menuItems: function() {
            return this.$store.state.language.texts.menuItems;
        }
    }
});


/**Button changer language */
Vue.component('changer-language', {
    template: `
    <v-btn  outlined color="success"  @click="onClick">
        <v-icon left>mdi-google-translate</v-icon> {{languageActive}}
    </v-btn>
    `,
    methods: {
        onClick: function() {
            changerLanguage();
        }
    },
    computed: {
        languageActive: function() {
            return this.$store.state.language.active;
        }
    }

});

/* Drawer of app */
Vue.component('base-drawer', {
    template: `
        <div  class="sticky-top" style="max-width: 256px;min-width: 200px;width: 75%;">
            <v-navigation-drawer left fixed temporary d-flex align-stretch overlay-color="secondary"
                overlay-opacity=".8"
                v-bind="$attrs"
                v-on="$listeners"
                clipped app >
                    <v-img :aspect-ratio="7/3" :src="imageMenuPath" />
                        <v-list shaped>
                            <v-list-item v-for="(item, index) in menuItems"
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
                        <v-spacer></v-spacer>
                        <v-divider></v-divider>
                        <changer-language style="width: 95%;margin: 2%;"/>

            </v-navigation-drawer>
        </div> `,
    computed: {
        imageMenuPath: function() {
            if (this.$vuetify.theme.dark) {
                return './assets/public/images/bg-menu-black.png';
            }
            return './assets/public/images/bg-menu.png';
        },
        menuItems: function() {
            return this.$store.state.language.texts.menuItems;
        }
    },
    data: () => ({
        icons: [
            'home',
            'book',
            'briefcase',
            'account-group',
            'contacts'
        ],
    }),
});

/* Button changer to dark mode */
Vue.component('btn-dark-mode', {
    template: `
        <div>
            <v-tooltip v-if="!$vuetify.theme.dark" bottom>
                <template v-slot:activator="{ on }">
                    <v-btn v-on="on" color="info" icon raised rounded @click="onClick">
                        <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
                    </v-btn>
                </template> <span>{{ darkModeOn }}</span>
                </v-tooltip>
                <v-tooltip v-else bottom>

                <template v-slot:activator="{ on }">
                    <v-btn v-on="on" color="info"  icon raised rounded @click="onClick">
                        <v-icon color="yellow">mdi-white-balance-sunny</v-icon>
                    </v-btn>
                </template> <span> {{ darkModeOff }}</span>
                </v-tooltip>
        </div> `,
    methods: {
        onClick: function() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            if (this.$vuetify.theme.dark) {
                window.localStorage.setItem('darkActive', "1");
            } else {
                window.localStorage.setItem('darkActive', "0");
            };
        }
    },
    computed: {
        darkModeOn: function() {
            return this.$store.state.language.texts.darkModeOn;
        },
        darkModeOff: function() {
            return this.$store.state.language.texts.darkModeOff;
        }
    }
});

/*  App top bar */
Vue.component('base-app-top-bar', {
    template: `
        <div>
            <div id="top-bar">
                <!--   the backtotop component -->
                <v-app-bar elevate-on-scroll class="overflow-y-auto v-app-bar--fixed "
                    style="z-index: 1008;">
                    <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />
                        <router-link to="/">
                            <v-img class="mx-2" :src="logoPath"  max-height="90" max-width="190" contain />
                        </router-link>
                    <v-spacer></v-spacer>
                    <base-menu />
                    <btn-dark-mode class="d-none d-md-block"/>
                    </v-app-bar>
            </div>

            <base-drawer v-model="drawer" id="base-drawer-mobile" />

        </div> `,
    data: () => ({
        drawer: null
    }),
    computed: {
        logoPath: function() {
            if (this.$vuetify.theme.dark) {
                return './assets/public/images/logo-Ferrus-Logic-white.svg';
            }
            return './assets/public/images/logo-Ferrus-Logic.svg';
        }
    }
});

/* Footer of app */
Vue.component('base-footer', {
    store,
    template: `
        <div>


            <v-footer id="home-footer" min-height="72" d-block pa-2>
                <v-container>
                    <v-row>
                        <v-col cols="12" md="6">
                            <div class="d-flex flex-wrap justify-md-start justify-center">
                                <div v-for="(s, i) in social">
                                    <a :href="s.url" target="_blank" :rel="s.label">
                                        <v-tooltip top :key="i"
                                        class="pa-1 pa-md-0 mr-4">

                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn class="mx-1" icon v-bind="attrs" v-on="on" x-large>
                                                <v-icon color="grey lighten-1"> {{s.icon}} </v-icon>
                                                </v-btn>
                                                <slot/>
                                                <v-spacer></v-spacer><v-spacer></v-spacer>
                                        </template>
                                        <span> {{toFollowIn}}  {{ s.label}}</span>
                                        <v-spacer></v-spacer>
                                        </v-tooltip>
                                    </a>
                                </div>
                            </div>
                        </v-col>

                        <v-col class="text-center text-md-right" cols="12" md="6" >
                            Copyright &copy; {{ new Date().getFullYear() }}, {{ appName }}
                        </v-col>
                    </v-row>
                </v-container>
            </v-footer>
        </div> `,
    data: () => ({
        social: [{
            label: 'Facebook',
            icon: 'mdi-facebook',
            url: '#'
        }, {
            label: 'GitHub',
            icon: 'mdi-github',
            url: 'https://github.com/Ferruslogic/'
        }],
    }),
    computed: {
        appName: function() {
            return this.$store.state.language.texts.appName;
        },
        toFollowIn: function() {
            return this.$store.state.language.texts.toFollowIn;
        }
    }
});


Vue.component('base-grid-post', {
    template: `
        <div>
            <v-card class="mx-auto" max-width="344" outline >
                <v-img :src="thumbnail" height="200px"></v-img>
                <v-card-title> {{title}} </v-card-title>
                <v-card-subtitle> {{subtitle}} </v-card-subtitle>
            <v-card-actions>

            <router-link :to="postLink">
                <v-btn class="orange--text" text> {{ readMore }} </v-btn>
            </router-link>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>

            </v-card-actions>

            <v-expand-transition>
                <div v-show="show">
                    <v-divider></v-divider>
                    <v-card-text> {{ content }} </v-card-text>
                </div>
            </v-expand-transition>
            </v-card>
            </div> `,
    data: () => ({
        show: false
    }),
    props: {
        title: String,
        content: String,
        thumbnail: String,
        postLink: String,
        subtitle: String,
        postFolder: String
    },
    computed: {
        readMore: function() {
            return this.$store.state.language.texts.readMore;
        }
    }
});

Vue.component('base-page-title', {
    template: `
    <div class="container text-center">
        <h2 class="display-2 font-weight-bold mb-3"> {{ title }}</h2>
        <div class="v-responsive mx-auto mb-8" style="width: 56px;">
            <div class="v-responsive__content">
                <hr role="separator" aria-orientation="horizontal" class="mb-1 v-divider theme--light">
                <hr role="separator" aria-orientation="horizontal" class="v-divider theme--light">
            </div>
        </div>
    </div>
    `,
    props: {
        title: {
            type: String,
            default: "Page title"
        }
    },
});


Vue.component('base-grid-product', {
    template: `
    <div>
    <v-hover>
        <v-card
        slot-scope="{ hover }"
        class="mx-auto"
        color="grey lighten-4"
        max-width="600"
        >
        <v-img
            :aspect-ratio="16/9"
            :src="imageURL"
        >
        <v-expand-transition>
        <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
        >
            $ {{price}}
        </div>
        </v-expand-transition>
    </v-img>

    <v-card-text
        class="pt-4"
        style="position: relative;"
    >


    <div class="font-weight-light grey--text title mb-2">
        {{ softwareTag }}
    </div>

    <h3 class="display-1 font-weight-light orange--text mb-2">
        {{ softwareName }}
    </h3>

    <div class="font-weight-light grey--text  title mb-2">
        {{ description }}
    </div>

    </v-card-text>

    <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn icon :href="documentLink" target="_blank">
            <v-icon style="color: #ff7800;">mdi-file-document</v-icon>
        </v-btn>

        <v-btn icon :href="codeLink" target="_blank">
                <v-icon style="color: #ff7800;">mdi-github</v-icon>
        </v-btn>

    <v-btn icon :href="downloadLink" target="_blank">
                <v-icon style="color: #ff7800;">mdi-archive-arrow-down</v-icon>
    </v-btn>

    </v-card-actions>
    </v-card>
    </v-hover>
    </div>
    `,
    props: {
        imageURL: {
            type: String,
            default: "assets/public/images/logo.png"
        },
        price: {
            type: String,
            default: "00.00"
        },
        description: {
            type: String,
            default: "description"
        },
        softwareTag: {
            type: String,
            default: "software-Tag"
        },
        softwareName: {
            type: String,
            default: "software-Name"
        },
        downloadLink: {
            type: String,
            default: "#"
        },
        codeLink: {
            type: String,
            default: "#"
        },
        documentLink: {
            type: String,
            default: "#"
        }
    }
});


/* layout */
Vue.component('main-layout', {
    template: `
    <div>
        <v-app>
            <base-app-top-bar />
            <v-main>
                <v-container fluid class="container extra-padding">
                    <v-fade-transition mode="out-in">
                        <router-view />
                    </v-fade-transition>
                </v-container>
            </v-main>
            <base-footer />

        </v-app>
    </div>
    `
});


var pageHome = {
    template: `
        <div
        :class="styleBackHero"
        style="margin-top: -45px; margin-left: -14px; margin-right: -15px;">
            <frl-hero></frl-hero>

        </div>
    `,
    computed: {
        styleBackHero: function() {
            if (this.$vuetify.theme.dark) {
                return 'gradient-b';
            }
            return 'gradient-w';
        }
    }
};


var pagBlog = {
    template: `
    <div>
  <template>

    <base-page-title
      :title="titlePage"
    />

    <v-item-group>
    <v-container>
      <v-row>
        <v-col v-for="(post, index) in posts"
          :key ="index"
          cols="12"md="4" sm="6" >
            <v-item>
              <v-lazy>
                  <v-hover v-slot:default="{ hover }"
                    open-delay="200">
                   <div v-if="locate">
                      <base-grid-post  ripple
                        :title="post.es.title"
                        :thumbnail="post.thumbnail"
                        :postLink="'/blog/' + post.id"
                        :content="post.es.content"
                   />
                  </div>
                    <div v-else>
                      <base-grid-post  ripple
                        :title="post.en.title"
                        :thumbnail="post.thumbnail"
                        :postLink="'/blog/' + post.id"
                        :content="post.en.content"
                   />
                  </div>
                  </v-hover>
                </v-lazy>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
    </template>
    </div>
    `,
    data: () => ({
        error: false,
        posts: [],
        pageTitle: 'asd'
    }),
    created: function() {
        setLoadedPage(true);
        this.postsList();
    },
    methods: {
        ...mapActions([
            'syncSetLanguage',
            'syncLoadedPage'
        ]),
        postsList: async function() {
            var it = this;
            try {
                var data = await API_getPostList();
                it.posts = data;
            } catch (error) {
                pagBlog.error = true
            };
        }
    },
    mounted() {
        setLoadedPage(false);
    },
    computed: {
        locate: function() {
            return this.$store.state.language.active == 'es';
        },
        titlePage: function() {
            return this.$store.state.language.texts.blogPageName;
        }
    }


};


var pageSoftware = {
    template: `
    <div>

    <base-page-title
      :title="titlePage"
    />

    <v-item-group>
    <v-container>
      <v-row>
        <v-col v-for="(product, index) in products"
          :key ="index"
          cols="12"md="4" sm="6" >
            <v-item>
              <v-lazy>
                  <v-hover v-slot:default="{ hover }"
                    open-delay="200">

                    <div v-if="locate">
                          <base-grid-product
                            :softwareName ="product.es.label"
                            :price ="product.price"
                            :description ="product.es.description"
                            :softwareTag ="product.es.Tag"
                            :documentLink ="product.es.docLink"
                            :codeLink ="product.repoLink"
                            :downloadLink ="product.downloadLink"

                          />
                      </div>

                      <div v-else>
                            <base-grid-product
                            :softwareName ="product.en.label"
                            :price ="product.price"
                            :description ="product.en.description"
                            :softwareTag ="product.en.Tag"
                            :documentLink ="product.en.docLink"
                            :codeLink ="product.repoLink"
                            :downloadLink ="product.downloadLink"
                          />
                      </div>

                  </v-hover>
                </v-lazy>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
    </div>
    `,

    data: () => ({
        error: false,
        products: [],
    }),

    created: function() {

        setLoadedPage(true);
        this.projectsList();

    },

    methods: {
        ...mapActions([
            'syncSetLanguage',
            'syncLoadedPage'
        ]),

        projectsList: async function() {
            var it = this;
            try {
                var data = await API_getProjectsList();
                it.products = data;
            } catch (error) {

            };
        }
    },

    mounted() {
        setLoadedPage(false);
    },

    computed: {
        locate: function() {
            return this.$store.state.language.active == 'es';
        },
        loading: function() {
            return this.$store.state.loaded
        },
        titlePage: function() {
            return this.$store.state.language.texts.projectsPageName;
        }
    }
};


var pageAbout = {
    template: `
    <div>
        <div class="container text-center">
        <base-page-title
        :title="titlePage"
        />

        <div class="v-responsive mx-auto title font-weight-light mb-8 text-justify"
            style="max-width: 720px;">
                <div class="v-responsive__content">
                    <p v-html="textAbout"></p>
                </div>
        </div>


        <base-page-title
            :title="textTeam"
        />



<div class="container">
    <div class="row justify-center">


        <div class="col-md-3 col-12">
            <div class="text-center">
            <v-card>
            <v-img
                src="https://picsum.photos/350/165?random"
                height="125"
                class="grey darken-4"
            ></v-img>
            <v-card-title class="title">
                height
            </v-card-title>
            </v-card>
            </div>
        </div>
<div>
</div>

        <a href="#/contact" class="v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--large grey--text">
        <span class="v-btn__content">
            <span class="grey--text text--darken-1 font-weight-bold">
                Vuetify Documentation
            </span>
        </span>
        </a>



        </div>
    </div>


`,
    computed: {
        locate: function() {
            return this.$store.state.language.active == 'es';
        },
        titlePage: function() {
            return this.$store.state.language.texts.aboutPageName;
        },
        textAbout: function() {
            return this.$store.state.language.texts.textAbout;
        },
        textTeam: function() {
            return this.$store.state.language.texts.textTeam;
        }
    }

};


var pageContact = {
    template: `
<div>
      <base-page-title
            :title="titlePage"
      />

      <div class="v-responsive mx-auto title font-weight-light mb-8" style="max-width: 720px;">
          <div class="v-responsive__content">

          <p v-html="text"> </p>

          </div>
        </div>
    <v-card
    class="mx-auto pa-4"
    max-width="500"
    outlined
    >

        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>


          <v-textarea
                  v-model="message"
                  :rules="messageRules"
                  color="teal"
                  required
                >
                  <template v-slot:label>
                    <div>
                      Message
                    </div>
                  </template>
                </v-textarea>






        <v-btn
          :disabled="!valid"
          class="mr-4"
          @click="submit"
        >
          submit
        </v-btn>


        <v-btn @click="reset">
          clear
        </v-btn>

        </v-form>
    </v-card>
    </div>
    `,


    data: () => ({
        valid: true,
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        message: '',
        messageRules: [
            v => !!v || 'Message is required',
            v => (v && v.length <= 512) || 'Message must be less than 512 characters',
        ],
        htmlp: ""
    }),

    methods: {

        getFormValues() {

            return JSON.stringify(this.$refs.form.data)

        },

        submit() {
            this.$refs.form.validate();

            API_submitEmail(this.name, this.email, this.message);
        },

        validate() {
            this.$refs.form.validate()
        },
        reset() {
            this.$refs.form.reset()
        },
        resetValidation() {
            this.$refs.form.resetValidation()
        },

    },
    computed: {
        titlePage: function() {
            return this.$store.state.language.texts.contactPageName;
        },
        text: function() {
            return this.$store.state.language.texts.textContact;
        }
    }













};


Vuetify.config.silent = true;


var vm = new Vue({
    el: '#app',
    router,
    store,
    vuetify: new Vuetify({
        theme: {
            dark: false
        },
    }),
    template: `
    <div>

    <div v-if="loadingPage">
        <loading-page />
    </div>

    <div v-else>
        <main-layout />
    </div>

    <v-btn v-scroll="onScroll" v-show="fab" fab dark fixed bottom right color="primary" @click="toTop">
        <v-icon>mdi-arrow-up</v-icon>
    </v-btn>

    </div>
    `,

    data: () => ({
        textSearch: "",
        countries: [],
        fab: false
    }),

    methods: {
        ...mapActions([
            'syncSetLanguage',
            'syncLoadedPage'
        ]),
        onClick: function() {
            if (AppSetting.language != 'es') {
                saveIntoStorage('language', 'es');
            } else {
                saveIntoStorage('language', 'en');
            };

            activeLanguage();
        },
        onScroll(e) {
            if (typeof window === 'undefined') return
            const top = window.pageYOffset || e.target.scrollTop || 0
            this.fab = top > 20
        },
        toTop() {
            this.$vuetify.goTo(0)
        }

    },
    beforeCreate() {
        state.loaded = true;
    },
    created() {
        let darkActive = window.localStorage.getItem('darkActive');

        if (darkActive === null) {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                window.localStorage.setItem('darkActive', "1");
            } else {
                window.localStorage.setItem('darkActive', "0");
            };
        };

        if (darkActive === "1") {
            this.$vuetify.theme.dark = true;
            window.localStorage.setItem('darkActive', "1");

        } else {
            this.$vuetify.theme.dark = false;
            window.localStorage.setItem('darkActive', "0");
        };

        activeLanguage();
    },
    mounted() {
        this.error = false;
        this.overlay = false;
        setLoadedPage(false);
    },
    computed: {
        ...mapGetters([
            'postActive'
        ]),
        appName: function() {
            return this.$store.state.language.title;
        },
        loadingPage: function() {
            return this.$store.state.loaded;
        }
    }
});
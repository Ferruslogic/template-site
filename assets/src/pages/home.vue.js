Vue.component('frl-hero-texts', {
    template: `
        <div>
            <div class="v-responsive d-flex align-center" 
                style="height: 100%; width: 100%;">
                <div class="v-responsive__content">
                <div id="hero-text">
                    <h1 class="display-1 font-weight mb-4"> Simple things are more beautiful!</h1>
                    <p class="lead mb-5"> Helping create your cross-platform applications. 
                        <br>
                    We offer you our help, so that you develop and develop 
                    much faster with 
                    <kbd>
                        <a class="font-weight-black" href="https://livecode.org/" target="_blank" rel="LiveCode Open Source" style="text-decoration: none !important;color: #FFFFFF;">
                        LiveCode.
                        </a>
                    </kbd>
                    </p>

                    
                </div>
                </div>
            </div>
        </div>
    `
});


Vue.component('frl-hiro-image', {
    template: `
    <section style="align-self-center; margin-bottom: 330px;" >
        
        <img src="./assets/public/images/lines.svg" id="lines" class="spin position-absolute" loading="lazy">
        <img src="./assets/public/images/laptop-mobil.png" id="hero-img" class="position-absolute" loading="lazy">
     </section>
    `
});


Vue.component('frl-hero', {
    template: `
    <section id="hero"
    class= "container mx-auto extra-padding">

    <v-row >
    <div class="col-md-6 col-sm-12">
        <v-container class="px-4 py-12 py-sm-4 pt-md-16">
        <v-responsive class="container mx-auto d-flex align-center text-sm-center text-md-left" height="100%" max-width="515" width="100%">
             <frl-hero-texts></frl-hero-texts>
             </v-responsive>
        </v-container>
     </div>

    <div class="col-md-6 col-sm-12 hero-images">
        <v-container class="d-flex align-center" height="100%"  width="100%">
        <frl-hiro-image></frl-hiro-image>
        </v-container>
     </div>    
</v-row>

    </section>
    `
});





Vue.component('seccion-one-home', {
    template: `
    <div>

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
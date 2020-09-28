Vue.component('frl-hero-texts', {
    template: `
        <div>
            <div class="v-responsive d-flex align-center blockquote" 
                style="height: 100%; width: 100%;">
                <div class="v-responsive__content">
                <div id="hero-text">
                    <h1 class="display-1 font-weight-bold mb-4"> Simple things are more beautiful!</h1>
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
})


Vue.component('frl-hiro-image', {
    template: `
    <section style="align-self-center; margin-bottom: 330px;" >
        <img src="./assets/public/images/lines.svg" id="lines" class="spin position-absolute">
        <img src="./assets/public/images/laptop-mobil.png" id="hero-img" class="position-absolute">
     </section>
    `
})


/* 
        <section id="theme-features" style="padding: 96px 0px;"><div class="base-section-heading text-center mb-12"><!----><!----><h1 class="text-uppercase headline font-weight-bold mb-2 text-center"> Theme Features </h1><div class="v-responsive base-divider primary mx-auto mb-6" style="max-width: 28px;"><div class="v-responsive__content"><hr role="separator" aria-orientation="horizontal" class="v-divider theme--light"></div></div><p class="base-body body-1 mx-auto grey--text text--darken-1 text-center mb-10" style="max-width: 700px;"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, in! Asperiores, impedit libero. Veniam rerum saepe unde nihil possimus quibusdam esse accusamus mollitia magni fuga. </p></div><div class="container"><div class="row"><div class="col-md-6 col-12"><div class="pt-2 mb-8 d-flex"><div class="base-avatar d-inline-flex mb-3 base-avatar--outlined"><div class="v-avatar base-avatar__outline grey lighten-3" style="height: 84px; min-width: 84px; width: 84px; opacity: 0.4; margin: -6px 0px 0px -6px;"></div><div class="v-avatar base-avatar__avatar white" style="height: 72px; min-width: 72px; width: 72px;"><i aria-hidden="true" class="v-icon notranslate mdi mdi-fountain-pen-tip theme--light" style="font-size: 36px;"></i></div></div><div class="ml-6"><h3 class="text-uppercase title font-weight-bold mb-3 text-left"> Pixel Perfect Design </h3><p class="base-body body-1 mx-auto grey--text text--darken-1 text-left mb-0" style="max-width: 700px;"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum veniam cum dolores ratione commodi beatae quas maxime, laboriosam excepturi solut! </p></div></div></div><div class="col-md-6 col-12"><div class="pt-2 mb-8 d-flex"><div class="base-avatar d-inline-flex mb-3 base-avatar--outlined"><div class="v-avatar base-avatar__outline grey lighten-3" style="height: 84px; min-width: 84px; width: 84px; opacity: 0.4; margin: -6px 0px 0px -6px;"></div><div class="v-avatar base-avatar__avatar white" style="height: 72px; min-width: 72px; width: 72px;"><i aria-hidden="true" class="v-icon notranslate mdi mdi-cellphone theme--light" style="font-size: 36px;"></i></div></div><div class="ml-6"><h3 class="text-uppercase title font-weight-bold mb-3 text-left"> Retina Ready </h3><p class="base-body body-1 mx-auto grey--text text--darken-1 text-left mb-0" style="max-width: 700px;"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum veniam cum dolores ratione commodi beatae quas maxime, laboriosam excepturi solut! </p></div></div></div><div class="col-md-6 col-12"><div class="pt-2 mb-8 d-flex"><div class="base-avatar d-inline-flex mb-3 base-avatar--outlined"><div class="v-avatar base-avatar__outline primary" style="height: 84px; min-width: 84px; width: 84px; opacity: 0.4; margin: -6px 0px 0px -6px;"></div><div class="v-avatar base-avatar__avatar primary" style="height: 72px; min-width: 72px; width: 72px;"><i aria-hidden="true" class="v-icon notranslate mdi mdi-pencil-box-outline theme--dark" style="font-size: 36px;" dark="true"></i></div></div><div class="ml-6"><h3 class="text-uppercase title font-weight-bold mb-3 text-left"> Easily Customizable </h3><p class="base-body body-1 mx-auto grey--text text--darken-1 text-left mb-0" style="max-width: 700px;"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum veniam cum dolores ratione commodi beatae quas maxime, laboriosam excepturi solut! </p></div></div></div><div class="col-md-6 col-12"><div class="pt-2 mb-8 d-flex"><div class="base-avatar d-inline-flex mb-3 base-avatar--outlined"><div class="v-avatar base-avatar__outline grey lighten-3" style="height: 84px; min-width: 84px; width: 84px; opacity: 0.4; margin: -6px 0px 0px -6px;"></div><div class="v-avatar base-avatar__avatar white" style="height: 72px; min-width: 72px; width: 72px;"><i aria-hidden="true" class="v-icon notranslate mdi mdi-image-size-select-actual theme--light" style="font-size: 36px;"></i></div></div><div class="ml-6"><h3 class="text-uppercase title font-weight-bold mb-3 text-left"> Image Parallax </h3><p class="base-body body-1 mx-auto grey--text text--darken-1 text-left mb-0" style="max-width: 700px;"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum veniam cum dolores ratione commodi beatae quas maxime, laboriosam excepturi solut! </p></div></div></div><div class="col-md-6 col-12"><div class="pt-2 mb-8 d-flex"><div class="base-avatar d-inline-flex mb-3 base-avatar--outlined"><div class="v-avatar base-avatar__outline grey lighten-3" style="height: 84px; min-width: 84px; width: 84px; opacity: 0.4; margin: -6px 0px 0px -6px;"></div><div class="v-avatar base-avatar__avatar white" style="height: 72px; min-width: 72px; width: 72px;"><i aria-hidden="true" class="v-icon notranslate mdi mdi-ice-pop theme--light" style="font-size: 36px;"></i></div></div><div class="ml-6"><h3 class="text-uppercase title font-weight-bold mb-3 text-left"> Seo Optimized </h3><p class="base-body body-1 mx-auto grey--text text--darken-1 text-left mb-0" style="max-width: 700px;"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum veniam cum dolores ratione commodi beatae quas maxime, laboriosam excepturi solut! </p></div></div></div><div class="col-md-6 col-12"><div class="pt-2 mb-8 d-flex"><div class="base-avatar d-inline-flex mb-3 base-avatar--outlined"><div class="v-avatar base-avatar__outline grey lighten-3" style="height: 84px; min-width: 84px; width: 84px; opacity: 0.4; margin: -6px 0px 0px -6px;"></div><div class="v-avatar base-avatar__avatar white" style="height: 72px; min-width: 72px; width: 72px;"><i aria-hidden="true" class="v-icon notranslate mdi mdi-help-circle-outline theme--light" style="font-size: 36px;"></i></div></div><div class="ml-6"><h3 class="text-uppercase title font-weight-bold mb-3 text-left"> 24/7 Support </h3><p class="base-body body-1 mx-auto grey--text text--darken-1 text-left mb-0" style="max-width: 700px;"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum veniam cum dolores ratione commodi beatae quas maxime, laboriosam excepturi solut! </p></div></div></div></div></div></section>
        </div>
         */

Vue.component('frl-hero', {
    template: `
   
        <div class="row fill-height">
            <div class="col-md-6 col-12">
                <div class="pt-2 mb-8">
                    <frl-hero-texts></frl-hero-texts>
                </div>
            </div>

            <div class="col-md-6 col-12">
                <div class="pt-2 mb-8 d-flex">
                    <frl-hiro-image></frl-hiro-image>
                </div>
            </div>
        </div>
    
    `
})




var pageHome = {
    template: `
    <div class="container container--fluid">
    <div class="v-responsive__content" style="width: 1429px;">
        <div>
            <frl-hero></frl-hero>
        </div>
    </div>
    </div>
    `
};
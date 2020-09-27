Vue.component('frl-hero-texts', {
    template: `
        <div class="container px-4 py-12">
            <div class="v-responsive d-flex align-center blockquote" 
                style="height: 100%; width: 100%;">
                <div class="v-responsive__content">
                <div id="hero-text">
                    <h1 class="display-1 font-weight-bold mb-4"> Simple things are more beautiful!</h1>
                    <p class="lead mb-5"> Helping create your cross-platform applications. 
                        <br>
                    We offer you our help, so that you develop and develop 
                    much faster with 
                    <kbd class="shrink mr-2 ">
                        <!--a href="https://livecode.org/" target="_blank" rel="LiveCode Open Source" -->
                             LiveCode.
                        <!--/a-->
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
    <section style="align-self-center" >
        <img src="./assets/public/images/lines.svg" id="lines" class="spin position-absolute">
        <img src="./assets/public/images/laptop-mobil.png" id="hero-img" class="position-absolute">
     </section>
    `
})




Vue.component('frl-hero', {
    template: `
    <div class="v-responsive__content row fill-height" style="width: 1429px;">
        <div class="col-md-6 col-12">
            <div class="pt-2 mb-8 d-flex">
                <frl-hero-texts></frl-hero-texts>
            </div>
        </div>
    
        <div class="col-md-6 col-12">
            <div class="pt-2 mb-8 d-flex">
                <frl-hiro-image></frl-hiro-image>
            </div>
        </div>
        <p><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></p>
    </div>
    `
})




var pageHome = {
    template: `<frl-hero></frl-hero>
    `
};
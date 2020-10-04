var singleBlog = {
    template: `
    <div> <div class="title">Post</div>
    
<p> AQUI ES DONDE SE CARGA EL HTML O EL MD! </p>
    v-html="html" <-- Toy probando con eso que no funciona.
  </div>
    `,
    data() {
        return {
            html: '<p> HTML LINCK TEST</p>'
        }
    },
};
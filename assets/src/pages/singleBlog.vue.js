var singleBlog = {
    template: `
    <div> 
        <div class="title"> {{ this.$route.params.id }} </div>
    
<p> AQUI ES DONDE SE CARGA EL HTML O EL MD! </p>
<span v-html="html"></span>

  </div>
    `,
    data: () => ({
        html: '<p> HTML LINCK TEST</p>',
    }),
};
var pageHome = {
    template: `
        <div
        :class="styleBackHero"
        style="margin-top: -45px; margin-left: -14px; margin-right: -15px;"
        >
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
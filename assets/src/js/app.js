Vuetify.config.silent = true;



var vm = new Vue({
    el: '#app',
    router,
    vuetify: new Vuetify({
        theme: {
            dark: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        }

    }),
    data: () => ({
        appName: "FerrusLogic S.A",
    }),
    template: `
        <main-layout />
    `
});
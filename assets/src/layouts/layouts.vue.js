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
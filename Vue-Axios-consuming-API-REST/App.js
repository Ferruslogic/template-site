Vue.component('my-component', {
    props: ['my'],
    template: '<div>{{my.text}}    <button v-on:click="getRequest(my.id)">Get</button>  <button v-on:click="patchRequest(my.id)">Update</button>   <button v-on:click="putRequest(my.id)">Replace</button>   <button v-on:click="deleteRequest(my.id)">Delete</button></div>',
    methods: {
        getRequest: function (id) {
            API_getRequest(id);
        },
        
        patchRequest: function (id) {
            API_patchRequest(id, 'NewItem');
        },
        
        putRequest: function (id) {
            API_putRequest(id, 'NewItem');
        },
        
        deleteRequest: function (id) {
            API_deleteRequest(id);
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        myfilter: "",
        myList: [
            { id: 0, text: 'Item1'},
            { id: 1, text: 'Item2' },
            { id: 2, text: 'Item3'}
        ]
    },
    
    methods: {
        getAllRequest() {
            API_getAllRequest();
        },
        
        getFilteredRequest() {
            API_getFilteredRequest(this.$data.myfilter);
        },
        
        postRequest() {
            API_postRequest('NewItem');
        },	
    }
})

/* Fetch API Serve v0.0.1b */

const baseUrl = 'http://192.168.83.32:8010/v/';
const baseUrlPost = 'assets/src/data/posts/';


function API_getPostList() {
    axios.get('./assets/src/data/posts/post-list.json')
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {});
}


function API_getPostListFetch() {
    fetch('https://httpbin.org/ip')
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            console.log('data = ', data);
        })
        .catch(function(err) {
            console.error(err);
        });
}

function fetchSend(url = String, urlParram = String) {
    var tURL = baseUrl + url + urlParram;


    fetch('tURL', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            console.log('data = ', data);
        })
        .catch(function(err) {
            console.error(err);
        });
}
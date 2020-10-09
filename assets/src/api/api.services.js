/* Fetch API Serve v0.0.1b */

const baseUrl = 'http://192.168.83.32:8010/v/';
const baseUrlPost = 'assets/src/data/posts/';


async function API_getPostList() {
    var result = await fetch('./assets/src/data/posts/post-list.json')
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            return error;
        });

    window.localStorage.setItem('PostList', result.length); // Para mostrar post falsos mientras.
    return result;
}
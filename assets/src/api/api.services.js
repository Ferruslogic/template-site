/* Fetch API Serve v0.0.1b */

const baseUrlPost = './assets/src/data/posts/';


async function API_getPostList() {
    var result = await fetch(baseUrlPost + 'post-list.json')
        .then(response => response.json())
        .then(data => {
            //TODO: Almacena el JSON EN EL LOCAL STORAGE
            return data;
        })
        .catch(error => {
            //TODO: RETORNA EL JSON DEL LOCAL STORAGE SI ESTA, ESTO MERITE QUE EL USUARIO TENGA UNA WEB.
            return error;
        });

    window.localStorage.setItem('PostList', result.length); //TODO: Para mostrar post falsos mientras.
    return result;
}
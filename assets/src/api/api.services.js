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
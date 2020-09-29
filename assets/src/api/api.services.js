function API_getRequest(id) {
    axios.get('http://localhost:8080/item/' + id)
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {});
}

function API_getFilteredRequest(filter) {
    axios.get('http://localhost:8080/item', {
            params: {
                filter: filter
            }
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {});
}

function API_getAllRequest() {
    axios.get('http://localhost:8080/item')
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {});
}

function API_postRequest(data) {
    axios.post('http://localhost:8080/item', {
            data: data
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {});
}

function API_putRequest(id, data) {
    axios.put('http://localhost:8080/item/ ' + id, {
            data: data
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {});
}

function API_patchRequest(id, data) {
    axios.patch('http://localhost:8080/item/ ' + id, {
            data: data
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {});
}


function API_deleteRequest(id) {
    axios.delete('http://localhost:8080/item/' + id)
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {});
}
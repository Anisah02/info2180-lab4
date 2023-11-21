window.onload = function () {
    let searchButton, httpRequest, phpResponse, searchfield;

    searchfield = document.getElementById("superheroSearch");
    phpResponse = document.getElementsByClassName("phpResponse")[0];
    searchButton = document.getElementsByClassName("btn")[0];

    searchButton.addEventListener("click", function () {
        httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = showResponse;
        httpRequest.open("GET", "superheroes.php?input=" + searchfield.value);
        httpRequest.send();
        searchfield.value = "";  // Fix: Use assignment operator "=" instead of comparison operator "=="
    });

    function showResponse() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                // alert(httpRequest.responseText);
                phpResponse.innerHTML = httpRequest.responseText;
            } else {
                alert("Invalid request.");
            }
        }
    }
};

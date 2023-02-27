
// Read the file with movies :
fetch("movies.json")
    .then(response => response.json())
    .then(myMovies => loadMovies(myMovies));

// Replace image and text per every one in HTML
function loadMovies(myMovies) {
    var imgMovie1 = document.getElementById("imgMovie1"); // Avengers
    var imgMovie2 = document.getElementById("imgMovie2"); // The Last Airbender
    var imgMovie3 = document.getElementById("imgMovie3"); // The Iron Giant
    var imgMovie4 = document.getElementById("imgMovie4"); // Mulan
    var txtMovie1 = document.getElementById("txtMovie1"); // Avengers
    var txtMovie2 = document.getElementById("txtMovie2"); // The Last Airbender
    var txtMovie3 = document.getElementById("txtMovie3"); // The Iron Giant
    var txtMovie4 = document.getElementById("txtMovie4"); // Mulan

    for (var i = 0; i < myMovies.movies.length; i++) {
        let title = myMovies.movies[i].title;
        let year = myMovies.movies[i].year;
        let url = myMovies.movies[i].url;
        let imgMovie = document.createElement("div");
        imgMovie.innerHTML = `<img src=${url} class="card-img-top" alt="..."></img>`;
        let txtMovie = document.createElement("p");
        txtMovie.innerHTML = `<p class="card-text"> <strong>${title}</strong>, ${year}</p>`;

        if (myMovies.movies[i].title === "Avengers") {
            imgMovie1.appendChild(imgMovie);
            txtMovie1.appendChild(txtMovie);
        } else if (myMovies.movies[i].title === "The Last Airbender") {
            imgMovie2.appendChild(imgMovie);
            txtMovie2.appendChild(txtMovie);
        } else if (myMovies.movies[i].title === "The Iron Giant") {
            imgMovie3.appendChild(imgMovie);
            txtMovie3.appendChild(txtMovie);
        } else if (myMovies.movies[i].title === "Mulan") {
            imgMovie4.appendChild(imgMovie);
            txtMovie4.appendChild(txtMovie);
        }
    }
}

// Toggle Avengers button :
var toggleButton = document.getElementById('toggleCardButton1');
var card1 = document.getElementById('card1');
var collapsableCard = new bootstrap.Collapse(card1, {toggle: false});
toggleButton.addEventListener('click', function () {
collapsableCard.toggle();
});
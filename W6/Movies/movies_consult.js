function getInputValue() {

    let movieName = document.forms["my_form"]["inputMovieName"];
    let inputMovieName = movieName.value;


    fetch("movies.json")
        .then(response => response.json())
        .then(myMovies => loadMovies(myMovies));



    function loadMovies(myMovies) {
        var mainContainer = document.getElementById("goodmovies");
        for (var i = 0; i < myMovies.movies.length; i++) {
            if (myMovies.movies[i].title === inputMovieName) {
                let title = myMovies.movies[i].title;
                let year = myMovies.movies[i].year;
                let imgURL = myMovies.movies[i].url;

                let mydiv = document.createElement("div");
                mydiv.innerHTML = `
        <div>
            <h3>${title}</h3> <br>
            ${year} <br>
            <img src=${imgURL} width="200"> <br> <br> 
        </div>
        `;
                mainContainer.appendChild(mydiv);
            }
        }
    }
}
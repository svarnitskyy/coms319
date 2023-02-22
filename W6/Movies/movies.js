fetch("./movies.json")
    .then(response => response.json())
    .then(data => dataToHTML(data));

function dataToHTML(data) {
    let mainContainer = document.getElementById("goodmovies");
    for (let i = 0; i < data.movies.length; i++) {
        let title = data.movies[i].title;
        let year = data.movies[i].year;
        let imgURL = data.movies[i].url;

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
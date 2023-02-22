fetch("./anonymoussuperheroes.json")
    .then(response => response.json())
    .then(data => dataToHTML(data));

function dataToHTML(data) {
    let mainContainer = document.getElementById("tb1");
    for (let i = 0; i < data.superheroe.length; i++) {
        let firstName = data.superheroe[i].firstName;
        let lastName = data.superheroe[i].lastName;
        let job = data.superheroe[i].job;

        let mytr = document.createElement("tr");
        mytr.innerHTML = `
        <tr>
            <td>${firstName} ${lastName}</td>
            <td>${job}</td>
        </tr> `;
        mainContainer.appendChild(mytr);

    }
}
function parseScores(scoresString) {
  return scoresString.split(" ");
}

function buildDistributionArray(scoresArray) {
  let distribution = [0, 0, 0, 0, 0];
  for (let score in scoresArray) {
    if (scoresArray[score] >= 90) {
      distribution[0]++;
    } else if (scoresArray[score] >= 80) {
      distribution[1]++;
    } else if (scoresArray[score] >= 70) {
      distribution[2]++;
    } else if (scoresArray[score] >= 60) {
      distribution[3]++;
    } else {
      distribution[4]++;
    }
  }
  return distribution;
}

function setTableContent(userInput) {
  let scoreArray = parseScores(userInput);
  let distribution = buildDistributionArray(scoreArray);
  

  let firstRow = document.getElementById("firstRow");
  firstRow.innerHTML = 
  `<td><div style="height:${distribution[0]}0px" class="bar0"></div></td>
   <td><div style="height:${distribution[1]}0px" class="bar1"></div></td>
   <td><div style="height:${distribution[2]}0px" class="bar2"></div></td>
   <td><div style="height:${distribution[3]}0px"  class="bar3"></div></td>
   <td><div style="height:${distribution[4]}0px" class="bar4"></div></td>`;

   let thirdRow = document.getElementById("thirdRow");
   thirdRow.innerHTML = 
   `<td>${distribution[0]}</td>
   <td>${distribution[1]}</td>
   <td>${distribution[2]}</td>
   <td>${distribution[3]}</td>
   <td>${distribution[4]}</td>`;

}

// The argument can be changed for testing purposes
setTableContent("45 78 98 83 86 99 90 59");

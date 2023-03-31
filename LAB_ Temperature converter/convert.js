window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  let submit = document.getElementById("convertButton");
  let C = document.getElementById("cInput");
  let F = document.getElementById("fInput");
  let photo = document.getElementById("weatherImage");
  let error = document.getElementById("errorMessage");
  submit.addEventListener("click", function (event) {

   
    if (isNaN(parseFloat(C.value))) {
      C.value = convertFtoC(parseFloat(F.value));
    } else if (isNaN(parseFloat(F.value))) {
      F.value = convertCtoF(parseFloat(C.value));
    }

    if(parseFloat(F.value) < 32){
      photo.setAttribute("src", "cold.png");
     }
     else if(parseFloat(F.value) >= 32 && parseFloat(F.value) <= 50){
      photo.setAttribute("src", "cool.png");
     }
     else{
      photo.setAttribute("src", "warm.png");
     }
  });

  

  C.addEventListener("keydown", function(event){
   F.value = "";
  });

  F.addEventListener("keydown", function(event){
   C.value = "";
  });
}

function convertCtoF(degreesCelsius) {
  return degreesCelsius * (9 / 5) + 32;
}

function convertFtoC(degreesFahrenheit) {
  return ((degreesFahrenheit - 32) * 5) / 9;
}

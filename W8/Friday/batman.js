var canvas;
var context;
const threshold = 125;
var countIn = 0
var countTot = 3000

// HTML
let img = document.getElementById("batman");
img.parentNode.removeChild(img);
let dimensions = document.getElementById("dimensions");
dimensions.innerHTML=`<p>Dimension [width,height] : [${img.width},${img.height}] </p>`;


// Total area of the Batman mask and square
const areaTot = img.width * img.height;

// Canvas
canvas = document.getElementById('Canvas');
context = canvas.getContext("2d");
// Set the canvas the same width and height of the image
canvas.width = img.width;
canvas.height = img.height;
// Create a copy of the image and show it in HTML
context.drawImage(img, 0, 0);
// Get object of the image
var imgData = context.getImageData(0, 0, canvas.width, canvas.height);


// Average
const average = pixelData => {
    let average = 0;
    for (let value in pixelData){
        average = average + pixelData[value];
    }
    return average / Object.keys(pixelData).length;
};



//cols: Width of the image representing total number of columns
//x: Row position of this pixel
//y: Column position of this pixel
function extractPixelColor(cols, column, row ) {
  //To get the exact pixel, the logic is to multiply total columns in this image with the row position of this pixel and then add the column position of this pixed
  let pixel = cols * row + column;
  //To get the array position in the entire image data array, simply multiply your pixel position by 4 (since each pixel will have its own r,g,b,a in that order)
  let pixelIndex = pixel * 4;
  //the rgba value of current pixel will be the following

  return {
   red: imgData.data[pixelIndex],
   green: imgData.data[pixelIndex + 1],
   blue: imgData.data[pixelIndex + 2],
   alpha: imgData.data[pixelIndex + 3],
  };
}


// Random number
function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}


for (let i=0;i<countTot;i++) {
    let column = randomNumber(1, img.width);
    let row = randomNumber(1, img.height);
    console.log("Random pixel (column, row):",column,row);

    const pixelRandom = extractPixelColor(img.width,column,row);
    console.log("Pixel :",pixelRandom);

    // Determine if Black or White
    if (average(pixelRandom) < threshold)
        countIn += 1;    // the random pixel felt in Batman

    // Paint RED color on the image
    let point = (img.width*row+column)*4;
    imgData.data[point] = 255;   //red
    imgData.data[point+1] = 0;  // green
    imgData.data[point+2] = 0;  // blue
    imgData.data[point+3] = 255;
    context.putImageData(imgData, 0, 0);
}

// Report the area in <- the Batman Mask area
let area = (countIn / countTot)*areaTot;

let areaHTML = document.getElementById("area");
areaHTML.innerHTML=`<div>
<p>Number in  : ${countIn} </p>
<p>Number tot : ${countTot}</p>
<p>Area tot:   ${areaTot} </p>
<p>Area final :${area} Percentage : ${area/areaTot}%</p> 
</div>`;



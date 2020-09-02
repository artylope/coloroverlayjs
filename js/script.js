console.log('linked');

let display = document.getElementById('display-colors');

let baseColor = [244,246,248];
// let blendColor= [237,49,49];
let blendColor= [150,166,187];

// //the neutral color;
// let basePalette = [
//     [245,245,245],
//     [217,217,217], 
//     [191,191,191],
//     [166,166,166],
//     [140,140,140],
//     [115,115,115],
//     [89,89,89],
//     [64,64,64],
//     [38,38,38],
// ]


//the neutral color;
let basePalette = [
    [231.5,231.5,231.5],
    [205.5,205.5,205.5], 
    [179.5,179.5,179.5],
    [153.5,153.5,153.5],
    [127.5,127.5,127.5],
    [101.5,101.5,101.5],
    [75.5,75.5,75.5],
    [49.5,49.5,49.5],
    [23.5,23.5,23.5],
]


function blendOverlay(baseColor,blendColor){

    let finalColor =[];

    for(var i=0; i<baseColor.length; i++){
        if (baseColor[i]<127.5){
            finalColor[i] = ((2 * baseColor[i] * blendColor[i]) / 255);
        } else if(baseColor[i]>127.5){
            finalColor[i]= (255 - (2 * (255 - baseColor[i]) * (255 - blendColor[i]) / 255));
        } else{
            finalColor[i]= blendColor[i];
        }
    }
    console.log('blendOverlay');
    console.log(finalColor);
    return finalColor;

}

// blendOverlay(baseColor,blendColor);


//both formula are correct.

function renderPalette(palette){
    //create box and set rgb value
    for(var i=0; i<palette.length; i++){
        let colorBox = document.createElement("div"); 
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = `rgb(${palette[i][0]},${palette[i][1]},${palette[i][2]})`;
        display.appendChild(colorBox);
    }
}

function blendPalette(basePalette,blendColor){
    let finalPalette =[];
    for(var i=0; i<basePalette.length; i++){
        finalPalette[i] = blendOverlay(basePalette[i], blendColor);
    }
    // finalPalette[4] = blendColor;
    console.log('blend palette');
    console.log(finalPalette);
    renderPalette(finalPalette);
    return finalPalette;
}

//render base palette
renderPalette(basePalette);
//render overlay color
//let user select and  change overlay color, update overlay color
//generate the hex values of the the final palette in scss variable form.


blendPalette(basePalette,blendColor);




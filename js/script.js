console.log('linked');

let display = document.getElementById('display-colors');

let baseColor = [244,246,248];
let blendColor= [237,49,49];

let basePalette = [
    [245,245,245],
    [217,217,217],
    [191,191,191],
    [166,166,166],
    [140,140,140],
    [115,115,115],
    [89,89,89],
    [64,64,64],
    [38,38,38],
]
// let finalColor=[]; //252,218,219;

// function blendOverlay(baseColor, blendColor){
//     return (base < 128) ? ((2 * base * adj) / 255) : (255 - (2 * (255 - base) * (255 - adj) / 255)); }
// }

// There are two part of formula:
// First part: If Lower Layer Value > 127.5, then do the following -
// Value Unit = (255-Lower Layer Value)/127.5
// Min Value = Lower Layer Value - (255-Lower Layer Value)
// Overlay = (Upper Layer Value * Value Unit) + Min Value



// Second part: If Lower Layer Value < 127.5, then do the following -
// Value Unit=Lower Layer Value/127.5
// Overlay = Upper Layer Value * Value Unit
// From the formual we can see that the final result is much depend on the upper layer value. If the upper layer value is higher(lighter), then the final result is more likely to be lighter.

// function blendOverlay1(baseColor,blendColor){

//     let finalColor =[];

//     for(var i=0; i<baseColor.length; i++){
//         if (baseColor[i]>127.5){
//             let a = (255-baseColor[i])/127.5;
//             let b = baseColor[i] - (255-baseColor[i]);
//             let c = (blendColor[i] * a) + b;
//             finalColor[i] = c;
//         } else if(baseColor[i]<127.5){
//             let a = baseColor[i]/127.5;
//             let c = (blendColor[i] * a);
//              v[i] = c;
//         }
//     }
//     console.log('blendOverlay1');
//     console.log(finalColor);
//     return finalColor;

// }

// blendOverlay1(baseColor,blendColor);


function blendOverlay(baseColor,blendColor){

    let finalColor =[];

    for(var i=0; i<baseColor.length; i++){
        if (baseColor[i]<127.5){
            finalColor[i] = ((2 * baseColor[i] * blendColor[i]) / 255);
        } else if(baseColor[i]>127.5){
            finalColor[i]= (255 - (2 * (255 - baseColor[i]) * (255 - blendColor[i]) / 255));
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
    console.log('blend palette');
    console.log(finalPalette);
    renderPalette(finalPalette);
    return finalPalette;
}


blendPalette(basePalette,blendColor);



let gridSize = 8;
let myColor = "#333333";
const container = document.querySelector('#container');

buildGrid();
//for(let j = 0; j < gridSize; j++){
//  const rows = document.createElement('div');
//  rows.classList.add('firstRow' + j);
//  rows.setAttribute('style', 'display: flex; flex-direction: row;');
  //firstRow.textContent = "First Row."
//  theBox.appendChild(rows);
  
//  for(let i = 0; i < gridSize; i++){
//    const square = document.createElement('div');
//    square.classList.add('square' + i);
//    square.textContent = "C " + i + " R " + j;
//    square.setAttribute('style', 'border-style: solid; height: 50px; width: 50px;')
//    //square.addEventListener('mouseover',colorFunction);
//    square.onmouseover = function(){
//      square.setAttribute('style', 'background: black; border-style: solid; height: 50px; width: 50px;');
//    }
//    //square.style.cssText = 'color: red; background: grey;';
//    rows.appendChild(square);
//  }
//}


const myButton = document.getElementById("myBtn");
myButton.addEventListener("click", gridResize);

function gridResize(){
  gridSize = prompt("What number of squares should each side be? 2 - 32")

  while (gridSize  > 32 || gridSize < 2 || isNaN(gridSize)){
    gridSize = prompt("What number of squares should each side be? 2 - 32")
  } 
  while (theBox.firstChild) {
    theBox.removeChild(theBox.firstChild);
  }
  buildGrid();
}

function buildGrid(){
  for(let j = 0; j < gridSize; j++){
    const rows = document.createElement('div');
    rows.classList.add('firstRow' + j);
    rows.setAttribute('style', 'display: flex; flex-direction: row;');
    //firstRow.textContent = "First Row."
    theBox.appendChild(rows);
    
    for(let i = 0; i < gridSize; i++){
      const square = document.createElement('div');
      square.classList.add('square' + i);
      //square.textContent = "C " + i + " R " + j;
      square.setAttribute('style', 'backgroundColor: #000000; border-style: solid; border-radius: 5px; border-width: 1px; height: 50px; width: 50px; margin: 1px;')
      //let squareClass = square.getAttribute('class');
      //console.log(squareClass);
      //square.addEventListener('mouseover',colorFunction);
      square.onmouseover = function(){
        let newColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        console.log(newColor);
        square.style.backgroundColor = 'black';
        //square.setAttribute('background', 'black');
        //square.setAttribute('style', `background: ${newColor}; border-style: solid; border-radius: 5px; border-width: 1px; height: 50px; width: 50px;margin: 1px`);
      }
      rows.appendChild(square);
    }
  }
}


const rainbowBtn = document.getElementById("colorBtn");
rainbowBtn.addEventListener("click", gridResizeR);

function gridResizeR(){
  gridSize = prompt("What number of squares should each side be? 2 - 32")

  //alert( 'Hello everyone!' + gridSize );
  while (gridSize  > 32 || gridSize < 2 || isNaN(gridSize)){
    gridSize = prompt("What number of squares should each side be? 2 - 32")
  } 
  while (theBox.firstChild) {
    theBox.removeChild(theBox.firstChild);
  }
  buildGridRainbow();
}
function buildGridRainbow(){
  for(let j = 0; j < gridSize; j++){
    const rows = document.createElement('div');
    rows.classList.add('firstRow' + j);
    rows.setAttribute('style', 'display: flex; flex-direction: row;');
    //firstRow.textContent = "First Row."
    theBox.appendChild(rows);
    
    for(let i = 0; i < gridSize; i++){
      const square = document.createElement('div');
      square.classList.add('square' + i);
      //square.textContent = "C " + i + " R " + j;
      square.setAttribute('style', 'border-style: solid; border-radius: 5px; border-width: 1px; height: 50px; width: 50px; margin: 1px;')
      //let squareClass = square.getAttribute('class');
      //console.log(squareClass);
      //square.addEventListener('mouseover',colorFunction);
      square.onmouseover = function(){
        let newColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        console.log(newColor);
        square.style.backgroundColor = newColor;
        //square.setAttribute('background', 'black');
        //square.setAttribute('style', `background: ${newColor}; border-style: solid; border-radius: 5px; border-width: 1px; height: 50px; width: 50px;margin: 1px`);
      }
      rows.appendChild(square);
    }
  }
}

/* const greyBtn = document.getElementById("greyBtn");
greyBtn.addEventListener("click", gridResizeGrey);

function gridResizeGrey(){
  gridSize = prompt("What number of squares should each side be? 2 - 100")

  //alert( 'Hello everyone!' + gridSize );
  while (gridSize  > 32 || gridSize < 2 || isNaN(gridSize)){
    gridSize = prompt("What number of squares should each side be? 2 - 100")
  } 
  while (theBox.firstChild) {
    theBox.removeChild(theBox.firstChild);
  }
  buildGridGrey();
}

function buildGridGrey(){
  for(let j = 0; j < gridSize; j++){
    const rows = document.createElement('div');
    rows.classList.add('firstRow' + j);
    rows.setAttribute('style', 'display: flex; flex-direction: row;');
    //firstRow.textContent = "First Row."
    theBox.appendChild(rows);
    
    for(let i = 0; i < gridSize; i++){
      const square = document.createElement('div');
      square.classList.add('square' + i);
      
      square.setAttribute('style', `background: ${myColor}; border-style: solid; border-radius: 5px; border-width: 1px; height: 50px; width: 50px; margin: 1px;`)

      //let squareClass = square.getAttribute('class');
      square.addEventListener('mouseover',colorFunction(e));
     // square.onmouseover = function(){
        
     //}
      rows.appendChild(square);
    }
  }
}*/ 



//function colorFunction(){
//  console.log(e.target);
  //alert( 'Hello everyone!' );
  //let thisColor = e.target.getAttribute('background');
  //console.log("background " + thisColor);
  //let trimColor = thisColor.slice(1);
  //console.log("trimmed " + trimColor);
  //let newColor = "#" + (Number(trimColor) + 222222);
  //      console.log("New color " + newColor);
        //square.style.backgroundColor = 'black';


  //square.setAttribute('style', 'background: black; border-style: solid; border-radius: 5px; border-width: 1px; height: 50px; width: 50px;margin: 1px');

//}





let squares = 16;

const html = document.querySelector("html");
html.style.height = "100%";

const body = document.querySelector("body");
body.style.height = "100%";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.margin = "0";
body.style.flexDirection = "column";

const topDiv = document.createElement("div");
body.append(topDiv);
topDiv.style.display = "flex";
topDiv.style.justifyContent = "center";
topDiv.style.alignItems = "center";
topDiv.style.flexGrow = "1";
topDiv.style.width = "100%";

const newGridButton = document.createElement("button");
topDiv.appendChild(newGridButton);
newGridButton.textContent = "Create new Grid";

newGridButton.addEventListener('click', () => {

    let isValid = false;

    while (!isValid) {

        squares = prompt("How many squares per side would you like?");

        if (squares === null) {
            alert("Grid creation cancelled.");
            return;
        }

        if (squares>100){
            alert("Number is too high");
        }
        else if (squares<=1){
            alert("Number is too low");
        }
        else if (isNaN(squares)){
            alert("Please Enter a Valid number");
        } else {
            isValid = true; // Valid input, exit the loop
        }

    }
    removeGrid();
    createGrid();
})

const mainDiv = document.createElement("div");
body.appendChild(mainDiv);
mainDiv.style.display = "flex";
mainDiv.style.width = "640px";
mainDiv.style.height = "640px"
mainDiv.style.flexWrap = "wrap";
mainDiv.style.background = "black";
mainDiv.style.gap = "2px";

createGrid();

const bottomDiv = document.createElement("div");
body.append(bottomDiv);
bottomDiv.style.display = "flex";
bottomDiv.style.justifyContent = "center";
bottomDiv.style.alignItems = "center";
bottomDiv.style.flexGrow = "1";
bottomDiv.style.width = "100%";

function createGrid(){
    const squareSize = (640 - (squares - 1) * 2) / squares;
    for (let i = 0; i < squares; i++){
        for (let j = 0; j < squares; j++){
            const squareDiv = document.createElement("div");
            mainDiv.appendChild(squareDiv);
            squareDiv.style.flexWrap = "wrap";
            squareDiv.style.width = `${squareSize}px`;
            squareDiv.style.height = `${squareSize}px`;
            squareDiv.style.backgroundColor = "red";
            squareDiv.style.boxSizing = "border-box";

            let darkenStep = 0;
    
            squareDiv.addEventListener('mouseover', () => {
                if (darkenStep < 10) {
                    squareDiv.style.backgroundColor = getRandomColor();
                    darkenStep++;
                    squareDiv.style.opacity = String(1 - darkenStep * 0.1);
                }
            })
        }
    }
}

function removeGrid(){
    mainDiv.innerHTML = "";
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
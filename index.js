// HTML construction functions:
const addHeader = () => {
    const currentHeader = document.getElementById("header");
    const createHeader = document.createElement("header");
    const headerContent = document.createTextNode("FIZZ-BUZZ GAME!");
    createHeader.appendChild(headerContent);
    document.body.insertBefore(createHeader, currentHeader);
}
addHeader();

const addMain = () => {
    const currentMain = document.getElementById("Main");
    const createMain = document.createElement("Main");
    //Input
    const mainInput = document.createElement("input");
    mainInput.setAttribute("type", "text");
    mainInput.setAttribute("placeholder", "Introduce un número!");
    createMain.appendChild(mainInput);
    // Button
    const mainButton = document.createElement("button");
    mainButton.innerHTML = "Introducir";
    createMain.appendChild(mainButton);
    // P
    const mainPara = document.createElement("p");
    mainPara.innerHTML = "RTA";
    createMain.appendChild(mainPara);
    //
    document.body.insertBefore(createMain, currentMain);
}
addMain();

// const addInput = () => {
//     const currentInput = document.getElementById("input");
//     const createInput = document.createElement("input");
//     createInput.setAttribute("type", "text");
//     createInput.setAttribute("placeholder", "Introduce un número!");
//     document.body.insertBefore(createInput, currentInput);
// }
// addInput();

const addFooter = () => {
    const currentFooter = document.getElementById("footer");
    const createfooter = document.createElement("footer");
    const footerContent = document.createTextNode("Made with love ❤ by Aldana Arcidiacono");
    createfooter.appendChild(footerContent);
    document.body.insertBefore(createfooter, currentFooter);
}
addFooter();

// CSS construction functions:
const addCSS = css => { 
    document.head.appendChild(document.createElement("style")).innerHTML = css;
}
addCSS(`*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
header{
    display: flex;
    align-items: center;
    justify-content: center;
    background: #da90a9; 
    width: -webkit-fill-available;
    height: 4rem;
    font-size: xx-large;
}
main {
    width: 16rem;
    height: 6rem;
    margin: 1rem;
    margin-left: 35rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    flex-direction: column;
}
input{
    width: 15rem;
    height: 3rem;
    padding: 0.5rem;
    margin: 1rem;
    font-size: 1.3rem;
    background: #F8E9EF;
    border: 0.5px solid #424040;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
button{
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
    background: #dbc1df;
    border: 1px solid #424040;
    border-radius: 9px;
    width: 8rem;
    font-size: 24px;
}
button:hover {
    background-color: #d4d4d4b0;
}
p{
    display: none;
    font-size: 24px;
    flex-direction: row;
    position: absolute;
    width: 8rem;
    left: 53rem;
    top: 6.5rem;
}
footer{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 1rem;
    background: #da90a9;
    width: -webkit-fill-available;
    height: 2rem;
    font-size: larger;
}`)

// FIZZ-BUZZ Functions:
const body = document.querySelector("body");
const userInput = document.querySelector("input");
const reveal = document.querySelector("p");
const inputButton = document.querySelector("button");

const arrayNumbers = [];

const createArray = () => {
    let number = 1;
    for(let i = 0; i < 100; i++){
        arrayNumbers.push(number);
        number++;
    }
}
createArray();

const printNumbers = () => {
    if (userInput.value % 3 === 0 && userInput.value % 5 === 0){
        reveal.innerText = "FIZZBUZZ";
        reveal.style.display = "flex";
        userInput.value = "";
        userInput.focus();
    } else if (userInput.value % 3 === 0){
        reveal.innerText = "FIZZ";
        reveal.style.display = "flex";
        userInput.value = "";
        userInput.focus();
    } else if (userInput.value % 5 === 0){
        reveal.innerText = "BUZZ";
        reveal.style.display = "flex";
        userInput.value = "";
        userInput.focus();
    } else {
        reveal.innerText = "😭";
        reveal.style.display = "flex";
        userInput.value = "";
        userInput.focus();
    }
}

inputButton.addEventListener("click", () => printNumbers());

userInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        event.preventDefault();
        printNumbers();
    }
});

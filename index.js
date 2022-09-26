// FIZZ-BUZZ Functions:
const arrayNumbers = [];

const createArray = () => {
    let number = 1;
    for(let i = 0; i < 100; i++){
        arrayNumbers.push(number);
        number++;
    }
}
createArray();

const printNumbers = (array) => {
    array.forEach(element => {
            if (element % 3 === 0 && element % 5 === 0){
                console.log("FIZZ-BUZZ");
            } else if (element % 3 === 0){
                console.log("FIZZ");
            } else if (element % 5 === 0) {
                console.log("BUZZ");
            } else {
                console.log(element);
            }
    });
    
}
printNumbers(arrayNumbers);

// HTML construction functions:
const body = document.querySelector("body");

const addElementsToHTML = () => {
    const addHeader = document.createElement("header");

    const headerContent = document.createTextNode("FIZZ-BUZZ GAME!");

    addHeader.appendChild(headerContent);

    const currentHeader = document.getElementById("header");
    document.body.insertBefore(addHeader, currentHeader);
}
addElementsToHTML();
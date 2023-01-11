//list of calculation functions
function remainder(a,b){
    if(b===0){
        alert("You can't divide by zero");
        return;
    }
    return a%b;
}

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply (a,b){
    return a*b;
}

function divide(a,b){
    if(b===0){
        alert("You can't divide by zero");
        return;
    }
    return Math.round((a/b)*10)/10;
}


function operate(a,b,operator){
    switch (operator){
        case '+':
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);

    }
}

//variable to store the number to be calculated
let calculatedNumber = "";

//variable to store the current operator to use
let currentOperator = "";

//select the buttons 

const numberButtons =document.querySelectorAll("button[data-number]");

for (let button of numberButtons){
    
    
    //the event listener responsible for the functionality of the numbers buttons
    if(button.dataset.number){
        button.addEventListener("click",(e)=>{
            if(calculatedNumber.length<=13){
                calculatedNumber += e.target.dataset.number;
            }
            
        })
    }

 
}

const equalButton = document.querySelector("button[data-symbol='=']");

const operationButtons = document.querySelector("button[data-operator]");


for (let button of operationButtons){
    //add functionality when an operation button is clicked

    button.addEventListener("click",(e)=>{
        currentOperator = e.target.dataset.operator
    })
}
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
        case "%":
            return remainder(a,b);
    }
}


//variable to store the number to be calculated
//string form first so it can be built with each click of the number-buttons
let calculatedNumber = "";

// variable to remember the number the user entered after hitting an operator button
let rememberNumber1 = null;

//variable to store the current operator to use
let currentOperator = "";

//select the display screen
let displayScreen = document.querySelector(".screen");

//function for displaying the number
function display(displayable){
    displayScreen.innerText = displayable;

}


//select the  number buttons 

const numberButtons =document.querySelectorAll("button[data-number]");

for (let button of numberButtons){
    
    
    //the event listener responsible for the functionality of the numbers buttons
    if(button.dataset.number){
        button.addEventListener("click",(e)=>{
            if(calculatedNumber.length<=13){
                calculatedNumber += e.target.dataset.number;
                display(parseFloat(calculatedNumber));
            }
            
        })
    }

 
}

const operationButtons = document.querySelectorAll("button[data-operator]");

//functionality : when the operator is clicked it will remembered to do the calculation
for (let button of operationButtons){
    //add functionality when an operation button is clicked

    button.addEventListener("click",(e)=>{
        let rememberOperator = currentOperator;
        
        currentOperator = e.target.dataset.operator;
        
        if (rememberNumber1 ===null ){
            rememberNumber1 = parseFloat(calculatedNumber);
            calculatedNumber="";
        }
        //if the memory R1 is already used and the operator is hit again
        else if(rememberNumber1 !==null){
            //the user needs to have entered a new number
            if(calculatedNumber !== ""){
                rememberNumber1 = operate(rememberNumber1,parseFloat(calculatedNumber),rememberOperator);
                display(rememberNumber1);
                calculatedNumber="";
            }
        }



    })
}


const equalButton = document.querySelector("button[data-symbol='=']");

equalButton.addEventListener("click",()=>{
    let result = operate(rememberNumber1,parseFloat(calculatedNumber),currentOperator);
    if (result){
        display(result);
        
    }
  
    
})

//reset button functionality
const resetButton = document.querySelector("button[data-symbol='CE']");

resetButton.addEventListener("click",()=>{
    calculatedNumber="";
    displayScreen.innerText="0";
    rememberNumber1=null;
    currentOperator="";
    
})

//decimal point button functionality


const decimalPointButton = document.querySelector("button[data-symbol='.']");

decimalPointButton.addEventListener("click",()=>{
    if (!calculatedNumber.includes(".")){
        calculatedNumber += ".";
    }
})
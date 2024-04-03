// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        let processedValue = display.value.replace(/\b0+(\d+)/g, '$1');
        display.value = eval(processedValue);
    }
    catch(error){
        display.value = "Error";
    }
}
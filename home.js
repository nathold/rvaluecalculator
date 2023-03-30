// This file is where the logic that powers the form lives

// goes through the page to collect certain features
let rValForm = document.getElementById("rValForm"); // this is the input box and submit button
let clearButton = document.getElementById("clearButton"); // this is the clear button
let outputDiv = document.getElementById('outputValues'); // this is the empty area where the text will be output

// wait until the user hits the submit button and then do this
rValForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let rVal = document.getElementById("rval").value; // get the value of the user's input
    let outputString = ""; // initialize the output 
    if (rVal > 15) {
        // do our math and store the results in variables
        calculatedValue1 = rVal * 0.007;
        calculatedValue2 = 0.55 - calculatedValue1;
        calculatedValue3 = rVal * calculatedValue2;
        uValue = 1 / calculatedValue3;
        withThermalBreaks = rVal * 0.8;
        withThermalBreaksU = 1 / withThermalBreaks;

        // add onto the output with each equation
        outputString += `<h1>Output for R = ${rVal}</h1>`; // ${blah} places the value of the variable in the output
        outputString += '<h3>Without Qualified Thermal Breaks</h3>'
        outputString += `${rVal} × 0.007 = ${calculatedValue1.toFixed(5)}`; // since we're dealing with numbers, we have to cut off the decimal places somewhere. The toFixed(number) method cuts off the decimal places after the specified amount
        outputString += '<br/>';
        outputString += `0.55 - ${calculatedValue1.toFixed(5)} = ${calculatedValue2.toFixed(5)}`
        outputString += '<br/>';
        outputString += `${rVal} × ${calculatedValue2.toFixed(5)} = R ${calculatedValue3.toFixed(2)}, U-${uValue.toFixed(3)} `
        outputString += '<br/>';
        outputString += '<br/>';
        outputString += '<h3>With Qualified Thermal Breaks</h3>'
        outputString += `${rVal} × 0.8 = R ${withThermalBreaks.toFixed(2)}, U-${withThermalBreaksU.toFixed(3)} `
        outputString += '<br/>';
    }

    // no matter what this will output (whether or not R > 15)
    deratingBrick = rVal * 0.7;
    deratingBrickU = 1 / deratingBrick;
    outputString += '<h3>Derating Factor at Brick 0.7</h3>'
    outputString += `${rVal} × 0.7 = R ${deratingBrick.toFixed(2)}, U-${deratingBrickU.toFixed(3)} `


    outputDiv.innerHTML = outputString; // place the output on the page
    rValForm.style.display = "none"; // hide the form

    clearButton.style.display = "block"; // show the clear button
});

// when the clear button is clicked, do this
clearButton.addEventListener("click", (e) => {
    rValForm.style.display = "block"; // display the form again
    clearButton.style.display = "none"; // hide the clear button
    outputDiv.innerHTML = ""; // make nothing display in the output (because we're resetting)
})

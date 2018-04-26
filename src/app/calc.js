$(document).ready(function () {

    // Make our variables global to the runtime of our application

    var firstNumber;
    var secondNumber;
    var operator;
    var result;
    var isOperatorChosen;
    var isCalculated;

    // Use a function to initialize our calculator.
    // This way when the user hits clear, we can guarantee a reset of the app.
    function initializeCalculator() {
        firstNumber = "";
        secondNumber = "";
        operator = "";
        firstInput = "";

        isOperatorChosen = false;
        isCalculated = false;

        $("#first-number, #second-number, #operator, #result").empty();
    }

    // Add an on click listener to all elements that have the class "number"
    $(".number").on("click", function () {

        // Check if we've already run a calculation, if so... we'll just.
        if (isCalculated) return;

        // If operator is chosen, we should be writing the secondNumber, otherwise, the firstNumber
        if (isOperatorChosen) {
            secondNumber += $(this).val();
            $("#second-number").text(secondNumber);

        }
        else {
            firstNumber += $(this).val();
            $("#first-number").text(firstNumber);
        }
    });
    // handles decimal input
    $("#button-decimal").on("click", function () {
        $(".number").on("click", function () {
            secondHalf = $(this).val();
        })
        if (isCalculated) return;

        // If operator is chosen, we should be writing the secondNumber, otherwise, the firstNumber
        if (isOperatorChosen) {
            secondNumber += $(this).val();
            $("#second-number").text(secondNumber);

        }
        else {
            firstNumber += $(this).val();
            $("#first-number").text(firstNumber);
        }
    })

    // Add an on click listener to all elements that have the class "operator"
    $(".operator").on("click", function () {

        // Check if a first number has already been selected
        // Or we've already run a calculation, if so we just exit.
        if (!firstNumber || isCalculated) return;

        // Set isOperatorChosen to true so we start writing to secondNumber
        isOperatorChosen = true;

        // Store off the operator
        operator = $(this).val();

        // Set the HTML of the #operator to the text of what was clicked
        $("#operator").text($(this).text());

    });


    // Add an on click listener to all elements that have the class "equal"
    $(".equal").on("click", function () {

        // If we already clicked equal, don't do the calculation again
        if (isCalculated) return;

        // Set isCalculated to true so that we don't get in a weird UI state by clicking buttons again
        isCalculated = true;

        // Use parseInt to convert our string representation of numbers into actual integers
        firstNumber = parseFloat(firstNumber);
        secondNumber = parseFloat(secondNumber);

        // Based on the operator that was chosen.
        // Then run the operation and set the HTML of the result of that operation
        if (operator === "plus") {
            result = firstNumber + secondNumber;
        }

        else if (operator === "minus") {
            result = firstNumber - secondNumber;
        }

        else if (operator === "times") {
            result = firstNumber * secondNumber;
        }

        else if (operator === "divide") {
            result = firstNumber / secondNumber;
        }

        $("#result").text(result);
    });

    // Add an on click listener to all elements that have the class "clear"
    $(".clear").on("click", function () {

        // Call initializeCalculater so we can reset the state of our app
        initializeCalculator();

    });

    // Call initializeCalculater so we can set the state of our app
    initializeCalculator();
});  
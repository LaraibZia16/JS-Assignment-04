// MathWhiz Kids - A Fun Math Learning Program for Children interface created using JavaScript
document.write(` <div style=" background-color: rgb(253, 216, 2);">
    <div class="header container d-flex justify-content-between align-items-center">
        <h4>MathWhiz Kids</h4><i class="fa-solid fa-bars"></i>
    </div>
    </div>
    <div class="container p-4 text-center box">
        <h2>Where Numbers Turn into Adventures!</h2>
        <p class="mt-4"> Welcome to MathWhiz Kids! This program helps kids learn basic math through fun activities.</p>
    </div>`);

// Ask a user to select math activity and convert input to lowercase
var activity = prompt(`
Select a math activity from the list below:"
1.Forward Counting
2.Backward Counting
3.Multiplication Table
4.Even Numbers
5.Odd Numbers
6.Arithmetic Operations
  `);

// forward counting activity
if (activity === "1") {

    var forwardCountSt = +prompt("Enter a starting number:");
    var forwardCountEnd = +prompt("Enter an ending number:");

    var result = "";

    if (forwardCountSt <= forwardCountEnd) {

        for (var i = forwardCountSt; i <= forwardCountEnd; i++) {

            result += i + "    ";

        }

        document.write(`

        <div class="card text-center mt-4" style="width: 60%; margin: auto;">

          <div class="card-header">
            <h3>Forward Counting</h3>
          </div>

          <div class="card-body">

            <h5 class="card-title mt-3">
              Forward Counting From ${forwardCountSt} to ${forwardCountEnd}
            </h5>

            <h3 class="card-text mt-3 minibox">
             ${result}
            </h3>

            <a href="./index.html" class="btn mt-3"">
              Try another activity
            </a>

          </div>

        </div>

        `);

    } else {

        document.write(`
 <div class="card text-center mt-4" style="width: 60%; margin: auto;">

          <div class="card-header">
            <h3>Forward Counting</h3>
          </div>

          <div class="card-body">

            <h5 class="card-title">
               Invalid input. Starting number should be less than or equal to ending number.
            </h5>

            <a href="./index.html" class="btn mt-3"">
              Try another activity
            </a>

          </div>

        </div>
        `);

    }

}
// backward counting activity
else if(activity === "2") {

    var backCountSt = +prompt("Enter a starting number:");
    var backCountEnd = +prompt("Enter an ending number:");

    var result = "";

    if (backCountSt >= backCountEnd) {

        for (var i = backCountSt; i >= backCountEnd; i--) {

            result += i + "    ";

        }

        document.write(`

        <div class="card text-center mt-4" style="width: 60%; margin: auto;">

          <div class="card-header">
            <h3>Backward Counting</h3>
          </div>

          <div class="card-body">

            <h5 class="card-title mt-3">
              Backward Counting From ${backCountSt} to ${backCountEnd}
            </h5>

            <h3 class="card-text mt-3 minibox">
             ${result}
            </h3>

            <a href="./index.html" class="btn mt-3"">
              Try another activity
            </a>

          </div>

        </div>

        `);

    } else {

        document.write(`
 <div class="card text-center mt-4" style="width: 60%; margin: auto;">

          <div class="card-header">
            <h3>Backward Counting</h3>
          </div>

          <div class="card-body">

            <h5 class="card-title">
               Invalid input. Starting number should be greater than or equal to ending number.
            </h5>

            <a href="./index.html" class="btn mt-3"">
              Try another activity
            </a>

          </div>

        </div>
        `);

    }

}
// multiplication table activity
else if(activity === "3") {
    var multTableNum = +prompt("Enter a number for the multiplication table:");
     var multTableNumst = +prompt("Enter the starting number for the multiplication table:");
    var multTableEnd = +prompt("Enter the ending number for the multiplication table:");

    var result = "";

    if (multTableNumst >= 1 && multTableEnd >= 1) {

        for (var i = multTableNumst; i <= multTableEnd; i++) {
            result += `${multTableNum} x ${i} = ${multTableNum * i} <br>`;

        }

        document.write(`

        <div class="card text-center mt-4" style="width: 60%; margin: auto;">

          <div class="card-header">
            <h3>Multiplication Table</h3>
          </div>

          <div class="card-body">

            <h5 class="card-title mt-3">
              Multiplication Table for ${multTableNum} from ${multTableNumst} to ${multTableEnd}
            </h5>

            <h3 class="card-text mt-3 minibox">
             ${result}
            </h3>

            <a href="./index.html" class="btn mt-3"">
              Try another activity
            </a>

          </div>

        </div>

        `);

    } else {

        document.write(`
 <div class="card text-center mt-4" style="width: 60%; margin: auto;">

          <div class="card-header">
            <h3>Multiplication Table</h3>
          </div>

          <div class="card-body">

            <h5 class="card-title">
               Invalid input. Starting number should be greater than or equal to ending number and both should be greater than or equal to 1.   
            </h5>

            <a href="./index.html" class="btn mt-3"">
              Try another activity
            </a>

          </div>

        </div>
        `);

    }

}
// Even Numbers activity
else if (activity === "4") {

    var evenSt = +prompt("Enter a starting number:");
    var evenEnd = +prompt("Enter an ending number:");

    var result = "";

    if (evenSt <= evenEnd) {

        for (var i = evenSt; i <= evenEnd; i++) {

            if (i % 2 === 0) {
                result += i + "    ";
            }

        }

        document.write(`

        <div class="card text-center mt-4" style="width: 60%; margin: auto;">

          <div class="card-header">
            <h3>Even Numbers</h3>
          </div>

          <div class="card-body">

            <h5 class="card-title mt-3">
              Even Numbers From ${evenSt} to ${evenEnd}
            </h5>

            <h3 class="card-text mt-3 minibox">
             ${result}
            </h3>
            <h4 class="mt-3">Even Numbers Are Divisible by 2</h4>
            <a href="./index.html" class="btn mt-3"">
              Try another activity
            </a>

          </div>

        </div>

        `);

    } else {

        document.write(`
 <div class="card text-center mt-4" style="width: 60%; margin: auto;">

          <div class="card-header">
            <h3>Even Numbers</h3>
          </div>

          <div class="card-body">

            <h5 class="card-title">
               Invalid input. Please enter valid numbers.
            </h5>

            <a href="./index.html" class="btn mt-3"">
              Try another activity
            </a>

          </div>

        </div>
        `);

    }

}
// Odd Numbers activity
else if (activity === "5") {

    var oddSt = +prompt("Enter a starting number:");
    var oddEnd = +prompt("Enter an ending number:");

    var result = "";

    if (oddSt <= oddEnd) {

        for (var i = oddSt; i <= oddEnd; i++) {

            if (i % 2 !== 0) {
                result += i + "    ";
            }

        }

        document.write(`

        <div class="card text-center mt-4" style="width: 60%; margin: auto;">

          <div class="card-header">
            <h3>Odd Numbers</h3>
          </div>

          <div class="card-body">

            <h5 class="card-title mt-3">
              Odd Numbers From ${oddSt} to ${oddEnd}
            </h5>

            <h3 class="card-text mt-3 minibox">
             ${result}
            </h3>
            <h4 class="mt-3">Odd Numbers Are Not Divisible by 2</h4>
            <a href="./index.html" class="btn mt-3"">
              Try another activity
            </a>

          </div>

        </div>

        `);

    } else {

        document.write(`
 <div class="card text-center mt-4" style="width: 60%; margin: auto;">

          <div class="card-header">
            <h3>Odd Numbers</h3>
          </div>

          <div class="card-body">

            <h5 class="card-title">
               Invalid input. Please enter valid numbers.
            </h5>

            <a href="./index.html" class="btn mt-3"">
              Try another activity
            </a>

          </div>

        </div>
        `);

    }

}
// Arithmetic Operations activity
else if (activity === "6") {
    var num1 = +prompt("Enter the first number:");
    var operator = prompt("Enter the operator e.g (+, -, *, /, %):");
    var num2 = +prompt("Enter the second number:");
    var result;
     if(operator === "+" || operator === "-" || operator === "*" || operator === "/" || operator === "%")
       {
        result = eval(num1 + operator + num2);
         document.write(`

        <div class="card text-center mt-4" style="width: 60%; margin: auto;">

          <div class="card-header">
            <h3>Arithmetic Operations</h3>
          </div>

          <div class="card-body">

            <h5 class="card-title mt-3">
              Arithmetic Operations 
            </h5>

            <h3 class="card-text mt-3 minibox">
            ${num1} ${operator} ${num2} = ${result}
            </h3>
            <h4 class="mt-3">Arithmetic Operations Are Performed</h4>
            <a href="./index.html" class="btn mt-3"">
              Try another activity
            </a>

          </div>

        </div>

        `);

    } else {

        document.write(`
 <div class="card text-center mt-4" style="width: 60%; margin: auto;">

          <div class="card-header">
            <h3>Arithmetic Operations</h3>
          </div>

          <div class="card-body">

            <h5 class="card-title">
               Invalid input. Please enter valid numbers and operator.
            </h5>

            <a href="./index.html" class="btn mt-3"">
              Try another activity
            </a>

          </div>

        </div>
        `);

       }

    // if (operator === "+") { 
    //     result = num1 + num2;
    // }
    // else if (operator === "-") {
    //     result = num1 - num2;
    // }
    // else if (operator === "*") {
    //     result = num1 * num2;
    // }
    // else if (operator === "/") {
    //     result = num1 / num2;
    // }
  }
// invalid input for activity selection
else {
 document.write(`
 <div class="card text-center mt-4" style="width: 60%; margin: auto;">

          <div class="card-header">
            <h3>Math Activity Not Found</h3>
          </div>
          <div class="card-body">

            <h5 class="card-title minibox" style="width: 80%;">
               Sorry, we couldn't find the math activity you're looking for.<br> 
               Please Select a valid activity number from the list below: <br><br>
               1.Forward Counting<br><br>
               2.Backward Counting<br><br>
               3.Multiplication Table<br><br>
               4.Even Numbers<br><br>
               5.Odd Numbers<br><br>
               6.Arithmetic Operations
            </h5>

            <a href="./index.html" class="btn mt-3"">
              Try another activity
            </a>

          </div>

        </div>
        `);

    }
    // End of code

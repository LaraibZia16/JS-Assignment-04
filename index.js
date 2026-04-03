// MathWhiz Kids - A Fun Math Learning Program for Children interface created using JavaScript
document.writeln(` <div style=" background-color: rgb(253, 216, 2);">
    <div class="header container d-flex justify-content-between align-items-center">
        <h4>MathWhiz Kids</h4><i class="fa-solid fa-bars"></i>
    </div>
    </div>
    <div class="container p-4 text-center box">
        <h2>Where Numbers Turn into Adventures!</h2>
        <p class="mt-3"> Welcome to MathWhiz Kids! This program helps kids learn basic math through fun activities.</p>
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
  `).toLowerCase();

// forward counting activity
if (activity === "forward counting") {
    var forwardCountSt = +prompt("Enter a starting number:");
    var forwardCountEnd = +prompt("Enter an ending number:");

    if (forwardCountSt <= forwardCountEnd) {
        for (var i = forwardCountSt; i <= forwardCountEnd; i++) {
            document.writeln(i + "<br>");
        }
    } else {
        document.writeln("Invalid input. Starting number should be less than or equal to ending number.");
    }
}

else {
  document.writeln(`
<div class="d-flex align-items-center justify-content-center" style="padding-top: 50px;">
    <div class="card  animate__animated animate__backInDown text-center" style="width: 20rem;">
      <img src="./images/notfound.gif" style="background-color: rgb(203, 245, 255);" class="card-img-top animate__animated animate__backInLeft" alt="...">
      <div class="card-body animate__animated animate__backInRight">
        <h3>Math Activity Not Found</h3>
        <p>Sorry, we couldn't find the math activity you're looking for. Please try again.</p>
        <a href="./index.html" class="btn btnerror">Try Another Activity</a>
      </div>
    </div>
</div>
`)
}

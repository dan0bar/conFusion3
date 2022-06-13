var rect = require('./rectangle');


function solveRect(l, b) {
    console.log("Solving for rectangle with l = " + l + " b = " + b);
    rect(l, b, (err, rectangle) => {
        if (err){
            console.log("Error: ", err.message)
        } else {
            console.log(rectangle.area())
            console.log(rectangle.perimeter())
        }
    })
}

solveRect(2, 4)
solveRect(3, 5)
solveRect(0, -1)

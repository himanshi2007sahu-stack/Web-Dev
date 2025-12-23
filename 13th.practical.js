// 1. User-defined functions

// Function declaration
function greet(name) {
    console.log("Hello " + name);
}

// Function expression
const add = function (a, b) {
    return a + b;
};

// Arrow function
const multiply = (x, y) => x * y;

// Invoking the functions
greet("Himanshi ");
console.log("Addition:", add(5, 7));
console.log("Multiplication:", multiply(4, 6));



// 2. var, let, const scope demonstration
console.log("\n--- Scope Demonstration ---");

function scopeTest() {
    if (true) {

        // var = function scoped (ignores block scope)
        var a = 10;

        // let = block scoped
        let b = 20;

        // const = block scoped & cannot be reassigned
        const c = 30;

        console.log("Inside block:");
        console.log("a (var):", a);
        console.log("b (let):", b);
        console.log("c (const):", c);
    }

    console.log("\nOutside block:");
    console.log("a (var):", a);  // Works → var is function scoped

    // The following will cause errors if uncommented:
    // console.log(b);  // Error → let is block scoped
    // console.log(c);  // Error → const is block scoped
}

scopeTest();
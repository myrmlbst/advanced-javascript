/*
A CLOSURE is a function defined inside another function.
The inner function has access to the variables and scopes
of the outer one.
*/

// example
function outer() {
    let message = "hello"
    function inner() {
        console.log(message);
    }

    inner();
    /*
    invoking the inner function DOES yield results since
    it is inside the outer function... it is IN the closure
    */
}

outer();
/*
invoking the outer function yields no results since
it is out of scope... it is NOT in the closure
*/

message = "goodbye";
/*
trying to update variables that inside the function while
we are outside of it will also not work
*/
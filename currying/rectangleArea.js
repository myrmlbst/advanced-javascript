/*
CURRYING is the process of breaking down a function that takes
multiple arguments into a series of smaller arguments that each
take singular arguments
*/

// without currying:
function rectangleArea(length, width) {
    return length * width;
}

// with currying:
function rectangleArea(length) {
    return function(width) {
        return length * width;
    }
}

rectangleArea(10)(5); // 50

const rectangleArea10 = rectangleArea(10);

const area = rectangleArea10(5); // 50
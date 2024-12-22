function increment() {
    let count = 0;
    count++;
    console.log(`Count increased to ${count}`);
}

increment(); // count = 1
increment(); // count = 1
increment(); // count = 1
increment(); // count = 1
increment(); // count = 1

/*
calling the increment function does NOT increment the count
5 times; the counter always starts at 0 and adds by 1. in this
scenario, we used closures to maintain the state of our variable
*/


// alternatively, with this code layout:
let count2 = 0;
count2 = 100;
/*
count2 is NOT private, it may be changed at any time
*/
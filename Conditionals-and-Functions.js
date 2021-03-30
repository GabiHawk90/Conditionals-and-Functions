
//Conditionals, Functions, Scope and Loops.

//Equals
//let equals = 1 === 1;

//Greater than
//let greaterThan = 5 > 1;

//Less than
//let lessThan = 2 < 10;

//Greater than Equals
//let graterThanEq = 5 >= 5;

//Less Than Equals
//let lessThanEq = 4 <= 9;

//Not Equals
//let notEquals = 5 !== 2;



let storeA = 4.40;
let storeB = 3.40;

let storeAIsLower = storeA < storeB;
console.log(storeAIsLower);

function compareStorePrices (storeA, storeB) {
    let storeAIsLower = StoreA < StoreB;
    if (storeAIsLower) {
        console.log ("Store A has a lower price.")
    } else if (storeB < storeA){
        console.log ("store B has a lower price.")
    } else {
        console.log("Their prices are equal.")
    }
}

compareStorePrices(10,5);
compareStorePrices(7,10);

if (storeAIsLower) {
   console.log("Store A has a lower price.")
}
else {
    console.log("Store B has a lower price")
}

else if (storeB < storeA){
    console.log ("store B has a lower price.")
} else {
    console.log("Their prices are equal.")


function squareNum (number){
    return number * number;
}

let squaredNumber = squareNum(4);
console.log(squaredNumber);
}


let x = 10;

function addNumbers (n, m, x){
    console.log(x);
    let b;
    if (1===1){
        b = 8;
    }
    console.log(b);
    return n + m;

}

addNumbers(1, 2, 10);

//              0  1  2  3  4
let ourArray = [1, 2, 3, 4, 5];

//for(counter;comp;incr){
 for(let i = 0; i<5; i++){
   console.log(ourArray[i]);
}

let ourArray = [1, 2, 3, 4, 5, 6, 7];

let arrLen = ourArray.length;
for(let i = 0; i<arrLen; i++){
    //console.log("i is equal to: " + i);
    console.log(ourArray[i]);
    //try not to put loop in loops
    for (let j = 0; j<10; j++){
        console.log('j is equal to:' + j)
    }

}
//careful with while, they will keep running if not done right.
let x = 0
while (x<10) {
    console.log('ran');
    x = x + 1;
}

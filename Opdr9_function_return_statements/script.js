// Checking if a number is big
const numberCheck = function (number) {
    if (number > 100) {
        return true;
    };
    return false;
};
const result1 = numberCheck(80);        //false
console.log(result1);
const result2 = numberCheck(120);       //true
console.log(result2);
// This is the kind of function that do something

// Bouncer at a club
const brendaTheBouncerBot = function (age, maxPeople, currentPeople) {
    if (age < 18) {
        return "This is a club for adults";
    }
    else if (currentPeople === maxPeople) {
        return "It's too busy now, come back later";
    }
    else {
        return "Come in";
    };
};
const entrance1 = brendaTheBouncerBot(25, 250, 130);        //Come in
console.log(entrance1);
const entrance2 = brendaTheBouncerBot(10, 250, 130);        //This is a club for adults
console.log(entrance2);
const entrance3 = brendaTheBouncerBot(25, 250, 250);        //It's too busy now, come back later
console.log(entrance3);
// This is the kind of function that do something

// Calculating the average
const calculateAverage = function (number1, number2, number3, number4, number5) {
    const numberAverage = (number1 + number2 + number3 + number4 + number5) / 5;
    return numberAverage;
};
const average1 = calculateAverage(2, 2, 2, 2, 2);
console.log(average1);
const average2 = calculateAverage(10, 20, 5, 30, 5);
console.log(average2);
// This is the kind of function that produce something
var secondInteger = 12;
var secondDecimal = 4.32;
var secondString = "is the best place to learn and practice coding!"


function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
    
    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number type) on a new line.
    console.log(Number.parseInt((firstInteger), 10) + Number.parseInt((secondInteger), 10));
    console.log(Number.parseFloat((firstDecimal), 10) + Number.parseFloat((secondDecimal), 10));
    console.log(firstString + secondString);
    
    /*var intSum =  firstInteger + Number(secondInteger);
    var decSum = firstDecimal + Number(secondDecimal);
    var strSum = firstString.concat(secondString);
    
    console.log(intSum);
    console.log(decSum);
    console.log(strSum); */
}
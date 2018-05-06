var input = 'adfgt';

function getLetter(input){
    let firstChar;
    let output;

    let letter;
    let firstChar;
    

    firstChar = s.charAt(0);
    firstChar.toLowerCase();
    switch (firstChar) {
        case 'a':
        case 'i':
        case 'u':
        case 'e':
        case 'o':
            letter = 'A';
            break;
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            letter = 'B';
            break;
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            letter = 'C';
            break;
        case 'n':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
            letter = 'D';
            break;
        
    }

    
    
    return letter;
    /*switch (true) {
        case 'aiueo'.includes(input[0]):
            output = 'A';
            break;
        case 'bcdfg'.includes(input[0]):
            output = 'B';
            break;
        case 'hjklm'.includes(input[0]):
            output = 'C';
            break;
        case 'npqrstvwxyz'.includes(input[0]):
            output = 'D';
            break;
        
    }

    return output;*/
}

console.log(getLetter(input));


/*let getLetter = s => 'DABC'[Number.parseInt(('aeioubcdfghjklm'.indexOf(s[0])/5)+1)]*/

//This was JavaScript with sugar syntax (es6, i guess)

//vanilla JavaScript
/*function getLetter(s) {
    var firstElement = s[0];
    var indexInCriteria = 'aeioubcdfghjklm'.indexOf(firstElement);
    var divisionByFiveOfCriteria = indexInCriteria / 5;
    // if a~u == 0.x
    // if b~g == 1.x
    // if h~m == 2.x
    // if not in criteria or n~z == -1
  
    //get a index position
    //so the options is -1~2.x increment to be 0~3.x and trunc
    var position = Number.parseInt(divisionByFiveOfCriteria + 1);
    //0 for not in criteria must return D
    //1 for a~u must return A
    //2 for b~g must return B
    //3 for h~m must return C
    //I did this order to not write the n~z in the criteria (kinda default)
    return 'DABC'[position];
  };
  */
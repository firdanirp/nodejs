var  input = 4;

function Permutation(input){
    if (input === 0) {
        return 1;
    } else {
        return input * Permutation(input-1);
    }
}
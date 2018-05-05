var score = 11;
var grade;

if (25 < score && score <= 30 ) {
    grade = 'A';
}else if (20 < score && score <= 25) {
    grade = 'B';
}else if (15 < score && score <= 20) {
    grade = 'C';
}else if (10 <score && score <= 15) {
    grade = 'D';
}else if (5 < score && score <= 10) {
    grade = 'E';
}else if (0 < score && score <=5) {
    grade = 'F';
}

console.log(grade);

// other solution
/* 
Javascript treats strings as arrays. So 'FEDCBA'[0] will return 'F'

What these folks did was calculate the appropriate index based on the score. If the score was 20, then parseInt((score > 0 ? score - 1 : 0) / 5)] will be evaluated to 3 and 'FEDCBA'[3] is 'C'

function getGrade(score) {
    return 'FEDCBA'[parseInt((score > 0 ? score - 1 : 0) / 5)];
}

function getGrade(score) {
    return 'FFEDCBA'[Math.ceil(score/5.0)];
}

function getGrade(score) {
    return 'FFEDCBA'[~~(score/5)];
}
*/
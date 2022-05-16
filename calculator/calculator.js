
const calculator = {
    name: "계산기",

    add: function (num1, num2) {
        return num1 + num2;
    },

    minus: function (num1, num2) {

        return Math.abs(num1 - num2)

        // if ((num1 - num2) < 0) {
        //     return - (num1 - num2)
        // } else {
        //     return (num1 - num2);
        // }
    },

    divide: function (num1, num2) {
        return num1 / num2;
    },

    mod: function (num1, num2) {
        return num1 % num2;
    },

    multifly: function (num1, num2) {
        return num1 * num2;
    },

    squared: function (num1, num2) {
        return num1 ** num2;
    }
}

// const player = {
//     name: "전사",
//     greet: function () {
//         console.log("내 이름은 전사입니다.");
//     }
// }

// console.log(calculator.add(1, 2));

function add(num1, num2) {
    console.log(num1 + num2);
}

function minus(num1, num2) {
    console.log(num1 - num2);
}

function divide(num1, num2) {
    console.log(num1 / num2);
}

function mod(num1, num2) {
    console.log(num1 % num2);

}

function multifly(num1, num2) {
    console.log(num1 * num2);
}

function squared(num1, num2) {
    console.log(num1 ** num2);
}

let num1 = Number(prompt("숫자 1을 입력하세요"));
let num2 = Number(prompt("숫자 2를 입력하세요"));

console.log(`${num1}과 ${num2}을/를 더한 결과입니다.`);
add(num1, num2);

console.log(`${num1}과 ${num2}을/를 뺀 결과입니다.`);
minus(num1, num2);

console.log(`${num1}과 ${num2}을/를 나눈 결과입니다.`);
divide(num1, num2);

console.log(`${num1}과 ${num2}을/를 나눈 나머지 결과입니다.`);
mod(num1, num2);

console.log(`${num1}과 ${num2}을/를 곱한 결과입니다.`);
multifly(num1, num2);

console.log(`${num1}의 ${num2}을/를 제곱한 결과입니다.`);
squared(num1, num2);

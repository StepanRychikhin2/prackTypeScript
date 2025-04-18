"use strict";
// const button = document.getElementById('btn')! as HTMLButtonElement
// const input1 = document.getElementById('num1')! as HTMLInputElement
// const input2 = document.getElementById('num2')! as HTMLInputElement
// const countTesyy = (num1: string, num2: string): string => {
// 	console.log(num1 + ' ' + num2);
// 	return num1 + ' ' + num2
// }
// button.addEventListener('click', () => {
// 	const inputValue = input1.value;
// 	const inputValue2 = input2.value;
// 	countTesyy(inputValue, inputValue2);
// })
let age = 50;
let namee = 'Max';
let toggle = true;
let empty = null;
let notInitialize = undefined;
let callback = (a) => {
    return 100 + a;
};
console.log(age);
let anything = -20;
anything = 'Text';
anything = {};
console.log(anything);
let some;
some = 'Text';
let str;
str = some;
let person = ['Max', 21];
var loadStatus;
(function (loadStatus) {
    loadStatus["loading"] = "LOADING";
    loadStatus["ready"] = "readi";
})(loadStatus || (loadStatus = {}));
console.log(loadStatus);
const isLoad = loadStatus.loading;
// console.log(isLoad)
if (isLoad === loadStatus.loading) {
    console.log(loadStatus.loading);
}
else if (isLoad === loadStatus.ready) {
    console.log(loadStatus.ready);
}
let MsrtNum;
MsrtNum = 'awd';
MsrtNum = 123;
let orRun;
orRun = 'enable';
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    },
};
// console.log(myPage)

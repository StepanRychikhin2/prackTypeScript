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
console.log(age);
let namee = 'Max';
console.log(namee);
let toggle = true;
console.log(toggle);
let empty = null;
console.log(empty);
let notInitialize = undefined;
console.log(notInitialize);
let callback = (a) => {
    return console.log(100 + a);
};
callback(123);
let anything = -20;
anything = 'Text';
anything = {};
console.log(anything);
let some;
some = 'Text';
let str;
str = some;
let person = ['Max', 21];
console.log(person);
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
console.log(MsrtNum);
MsrtNum = 123;
console.log(MsrtNum);
let orRun;
orRun = 'enable';
console.log(orRun);
function showMessage(message) {
    console.log(message);
}
showMessage('privit');
function calc(num1, num2) {
    return console.log(num1 + num2);
}
calc(123, 3);
function customError() {
    throw new Error('Error');
}
// customError()
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
console.log(page1);

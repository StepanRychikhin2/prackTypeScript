const button = document.getElementById('btn')! as HTMLButtonElement
const input1 = document.getElementById('num1')! as HTMLInputElement
const input2 = document.getElementById('num2')! as HTMLInputElement

const countTesyy = (num1: string, num2: string): string => {
	console.log(num1 + ' ' + num2);
	return num1 + ' ' + num2
}

button.addEventListener('click', () => {
	const inputValue = input1.value;
	const inputValue2 = input2.value;
	countTesyy(inputValue, inputValue2);
})



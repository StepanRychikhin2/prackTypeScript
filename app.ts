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

let age: number = 50
console.log(age)
let namee: string = 'Max'
console.log(namee)
let toggle: boolean = true
console.log(toggle)
let empty: null = null
console.log(empty)
let notInitialize: undefined = undefined
console.log(notInitialize)
let callback = (a: number) => {
	return console.log(100 + a)
}
callback(123)

let anything: any = -20
anything = 'Text'
anything = {}
console.log(anything)

let some: unknown
some = 'Text'

let str: string

str = some as string

let person: readonly [string, number] = ['Max', 21]
console.log(person)
enum loadStatus {
	loading = 'LOADING',
	ready = 'readi',
}

console.log(loadStatus)

const isLoad: loadStatus = loadStatus.loading
// console.log(isLoad)

if (isLoad === loadStatus.loading) {
	console.log(loadStatus.loading)
} else if (isLoad === loadStatus.ready) {
	console.log(loadStatus.ready)
}

let MsrtNum: string | number
MsrtNum = 'awd'
console.log(MsrtNum)
MsrtNum = 123
console.log(MsrtNum)
let orRun: 'enable' | 'disable'

orRun = 'enable'
console.log(orRun)
function showMessage(message: string) {
	console.log(message)
}
showMessage('privit')
function calc(num1: number, num2: number) {
	return console.log(num1 + num2)
}
calc(123, 3)
function customError() {
	throw new Error('Error')
}
// customError()
const page1: myPage = {
	title: 'The awesome page',
	likes: 100,
	accounts: ['Max', 'Anton', 'Nikita'],
	status: 'open',
	details: {
		createAt: new Date('2021-01-01'),
		updateAt: new Date('2021-05-01'),
	},
}

// const page2: myPage = {
// 	title: 'Python or Js',
// 	likes: 5,
// 	accounts: ['Alex'],
// 	status: 'close',
// }

type myPage = {
	title: string
	likes: number
	accounts?: string[]
	status: 'open' | 'close'
	details?: {
		createAt: Date
		updateAt: Date
	}
}

// console.log(myPage)
console.log(page1)

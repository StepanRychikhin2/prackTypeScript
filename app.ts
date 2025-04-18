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
let namee: string = 'Max'
let toggle: boolean = true
let empty: null = null
let notInitialize: undefined = undefined
let callback = (a: number) => {
	return 100 + a
}
console.log(age)

let anything: any = -20
anything = 'Text'
anything = {}
console.log(anything)

let some: unknown
some = 'Text'

let str: string

str = some as string

let person: readonly [string, number] = ['Max', 21]

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
MsrtNum = 123

let orRun: 'enable' | 'disable'

orRun = 'enable'

function showMessage(message: string) {
	console.log(message)
}

function calc(num1: number, num2: number) {
	return num1 + num2
}

function customError() {
	throw new Error('Error')
}

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


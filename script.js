// ## Zadanie 1:

const userName = 'lukas'
const userAge = 33
const likesJavaScript = true
const userHobby = 'piłka nożna'
const userCity = 'Warszawa'
const userNameUpper = `${userName.charAt(0).toUpperCase()}${userName.slice(1)}`
const userAgeOld = userAge + 10
const isAdult = userAge > 18
const isWarsawCitizen = userCity.includes('Warszawa')
const likesJSAndIsAdult = userAge && likesJavaScript

let message = `Cześć mam na imię ${userNameUpper}, mam ${userAge} lata,`

if (likesJavaScript) {
	message += ` lubie JavaScript,`
}

if (isWarsawCitizen) {
	message += ` mieszkam w mieście ${userCity}`
}

message += ` moim hobby jest ${userHobby}.`

// ## Zadanie 2

const library = {
	name: 'Miejska Biblioteka Publiczna',
	books: [],
}

const book1 = {
	title: 'Harry Potter i Kamień Filozoficzny',
	author: 'J.K. Rowling',
	yearOfPublication: 1997,
}
const book2 = {
	title: 'Harry Potter i Komnata Tajemnic',
	author: 'J.K. Rowling',
	yearOfPublication: 1998,
}
const book3 = {
	title: 'Harry Potter i Czara Ognia',
	author: 'J.K. Rowling',
	yearOfPublication: 2000,
}

library.books[0] = book1
library.books[1] = book2
library.books[2] = book3

const title1 = library.books[0].title
const author1 = library.books[0].author
const yearOfPublication1 = library.books[0].yearOfPublication
const title2 = library.books[1].title
const author2 = library.books[1].author
const yearOfPublication2 = library.books[1].yearOfPublication
const title3 = library.books[2].title
const author3 = library.books[2].author
const yearOfPublication3 = library.books[2].yearOfPublication
const bookInfo1 = `Tytuł: ${title1}, Autor: ${author1}, Rok wydania: ${yearOfPublication1}.`
const bookInfo2 = `Tytuł: ${title2}, Autor: ${author2}, Rok wydania: ${yearOfPublication2}.`
const bookInfo3 = `Tytuł: ${title3}, Autor: ${author3}, Rok wydania: ${yearOfPublication3}.`

let oldestBook

if (yearOfPublication1 < yearOfPublication2 && yearOfPublication1 < yearOfPublication3) {
	oldestBook = title1
}
if (yearOfPublication2 < yearOfPublication1 && yearOfPublication2 < yearOfPublication3) {
	oldestBook = title2
}
if (yearOfPublication3 < yearOfPublication1 && yearOfPublication3 < yearOfPublication2) {
	oldestBook = title3
}

const libraryInfo = `Biblioteka "${library.name}" zawiera książki: ${title1}, ${title2}, ${title3}. Najstarsza książka: ${oldestBook}.`

// ## Zadanie 3

const number1 = 10
const number2 = 3
const operationType = '*'

let result

if (operationType === '+') {
	result = number1 + number2
} else if (operationType === '-') {
	result = number1 - number2
} else if (operationType === '*') {
	result = number1 * number2
} else if (operationType === '/') {
	if (number2 === 0) {
		console.log('Działanie nie może być wykonane z powodu dzielenia przez zero.')
	} else {
		result = number1 / number2
	}
} else {
	console.log('Wybrano nieprawidłową operację.')
}

const isEven = result % 2 === 0 ? 'parzysty' : 'nieparzysty'

if (result !== undefined) {
	console.log(`Wynik operacji to: ${result}, który jest ${isEven}.`)
}

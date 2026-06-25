// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

const person = {
	name: "Demi-fiend",
	age: "16",
	isProtagonist: true,
};
console.log(person);

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

function isEmpty(object) {
	for (let key in object) {
		return false;
	}
	return true;
}

let grok = {};
console.log(isEmpty(grok));

grok.name = "AI";
console.log(isEmpty(grok));

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

const task = {
	title: "Bug fix",
	description: "Error 500 for download page is website",
	isCompleted: false,
};

const cloneAndModify = (object, modifications) => {
	return {
		...object,
		...modifications,
	};
};

const updates = {
	isCompleted: true,
	deadline: "Tomorrow",
};

const updatedTask = cloneAndModify(task, updates);

console.log("Свойства обновленной задачи:");
for (let key in updatedTask) {
	console.log(`${key}: ${updatedTask[key]}`);
}

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);

function callAllMethods(obj) {
	for (const key in obj) {
		if (typeof obj[key] === "function") {
			obj[key]();
		}
	}
}

const myObject = {
	method1() {
		console.log("Метод 1 вызван");
	},
	method2() {
		console.log("Метод 2 вызван");
	},
	property: "Это не метод",
};

callAllMethods(myObject);

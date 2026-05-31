"use strict";

// {
//     id: 1,
//     text: "Todo",
//     is_completed: false,
// }

const todoKeys = {
	id: "id",
	text: "description",
	deadline: "deadline",
	is_completed: "is_completed",
};

const todos = [];

const errTodoNotFound = todoId =>  `Todo with id ${todoId} not found`;

const getNewTodoId = todos =>
	todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text, deadline) => {
	const newTodo = {
		[todoKeys.id]: getNewTodoId(todos),
		[todoKeys.text]: text,
		[todoKeys.deadline]: deadline,
		[todoKeys.is_completed]: false,
	};
	todos.push(newTodo);
	return newTodo;
};

const completedTodoById = (todos, todoId) => {
	const todo = todos.find(todo => todo[todoKeys.id] === todoId);
	if (!todo) {
		console.error(errTodoNotFound(todoId));
		return null;
	}
	todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
	return todo;
};

const deleteTodoById = (todos, todoId) => {
	const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
	if (todoIndex == -1) {
		console.error(errTodoNotFound(todoId));
		return todos;
	}
	todos.splice(todoIndex, 1);
	return todos;
};

const editTodoById = (todos, todoId, newFields) => {
	const exists = todos.some(todo => todo[todoKeys.id] === todoId);
	if(!exists) {
		console.error(errTodoNotFound(todoId));
		return todos;
	}
	return todos.map(todo => {
		if (todo[todoKeys.id] === todoId){
			return {...todo, ...newFields};
		}
		return todo;
	})
}

// const deleteTodoById = (todos, todoId) => {
// 	return todos.filter(todo => todo[todoKeys.id] !== todoId);
// };

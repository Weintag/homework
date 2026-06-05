export const getTodosFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem("todos"));
};

export const setTodoLocalStorage = todos => {
	localStorage.setItem("todos", JSON.stringify(todos));
};

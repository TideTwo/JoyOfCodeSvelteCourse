type Todo = { id: number; text: string; completed: boolean };

let todos: Todo[] = [{ id: Date.now(), text: 'TD1', completed: false }];

export const getTodos = () => {
	return todos;
};
export const addTodo = (text: string) => {
	const todo: Todo = { id: Date.now(), text, completed: false };
	todos.push(todo);
};
export const removeTodo = (id: number) => {
	todos = todos.filter((todo) => {
		return todo.id !== id;
	});
};
export const clearTodos = () => {
	todos = [];
};

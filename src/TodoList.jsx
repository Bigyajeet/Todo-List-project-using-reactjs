import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4() }]);
    let [newTodo, setNewtodo] = useState("");

    let addNewtodo = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4() }];
        });
        setNewtodo("");
    };

    let updatetodo = (event) => {
        setNewtodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo.id !== id));
    };

    let upperCaseAll = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => ({
                ...todo,
                task: todo.task.toUpperCase()
            }))
        );
    };

    let upperCaseOne = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        task: todo.task.toUpperCase()
                    };
                }
                return todo;
            })
        );
    };

    return (
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updatetodo}></input>
            <br></br>
            <button onClick={addNewtodo}>Add a task</button>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <h4>Task to do List</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span>{todo.task}</span>
                        &nbsp; &nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        <button onClick={() => upperCaseOne(todo.id)}>Uppercase One</button>
                    </li>
                ))}
            </ul>
            <br></br>
            <button onClick={upperCaseAll}>UpperCaseAll</button>
        </div>
    );
}
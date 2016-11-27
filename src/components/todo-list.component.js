import React from 'react';

const TodoItem = ({todo, removeTodo}) => {
    return (
        <li onClick={() => { removeTodo(todo.id) }}>
            - { todo.text }
        </li>
    );
}

const TodoList = ({todos, removeTodo}) => {
    const todoNode = todos.map((todo) => {
        return (
            <TodoItem todo={todo} key={todo.id} removeTodo={removeTodo} />
        );
    });
    return (
        <div>
            <ul>
                { todoNode }
            </ul>
        </div>
    );
};

export default TodoList;

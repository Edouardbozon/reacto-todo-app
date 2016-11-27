import React, { Component } from 'react';

import TodoForm from './todo-form.component';
import TodoList from './todo-list.component';

class TodoApp extends Component {

    constructor (props) {
        super(props);
        // initial state
        this.state = {
            todo: [],
            done: []
        };
    }

    addTodo (value) {
        const todoItem = {
            text: value,
            id:  Date.now()
        };
        this.state.todo.push(todoItem);
        this.setState({ todo: this.state.todo });
    }

    removeTodo (id) {
        const filteredTodo = this.state.todo.filter((todo) => {
            if (todo.id !== id) {
                 return todo;
            }
            this.state.done.push(todo);
            return false;
        });
        this.setState({
            done: this.state.done,
            todo: filteredTodo
        });
    }

    render() {
        return (
            <div>
                <div>
                    <small>Todo: { this.state.todo.length },</small>
                    <small>Done: { this.state.done.length }</small>
                </div>
                <div>
                    <TodoForm
                        addTodo={this.addTodo.bind(this)}>
                    </TodoForm>
                    <TodoList
                        todos={this.state.todo}
                        removeTodo={this.removeTodo.bind(this)}>
                    </TodoList>
                </div>
            </div>
        );
    }
}

export default TodoApp;

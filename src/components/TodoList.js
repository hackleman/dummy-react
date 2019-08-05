import React, { Component } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

export default class TodoList extends Component {
    state = {
        todos: [],
        todoToShow: 'all',
        toggleAll: true
    };
    
    addtodo = todo => {
        this.setState({
            todos: [todo, ...this.state.todos]
        })
    }

    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                       ...todo,
                        complete: !todo.complete
                    }
                } else {
                    return todo;
                }
            })
        })
    }

    updateTodoToShow = (s) => {
        this.setState({
            todoToShow: s
        })
    }

    handleDeleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    removeComplete = () => {
        this.setState({
            todos: this.state.todos.filter(todo => !todo.complete)
        })
    }
    render() {
        let todos = [];

        if (this.state.todoToShow === 'all') {
            todos = this.state.todos;
        }
        else if (this.state.todoToShow === 'active') {
            todos = this.state.todos.filter(todo => !todo.complete);
        } 
        else if (this.state.todoToShow === 'complete') {
            todos = this.state.todos.filter(todo => todo.complete);
        }

        return (
            <div>
                <div>
                    <TodoForm
                        onSubmit={this.addtodo} 
                    />
                    {todos.map(todo => (
                        <Todo 
                            key={todo.id} 
                            todo={todo}
                            onDelete = {() => this.handleDeleteTodo(todo.id)}
                            toggleComplete={() => this.toggleComplete(todo.id)}
                        />
                    ))}
                    <div>
                        todos left:
                        {this.state.todos.filter(todo => !todo.complete).length}
                    </div>
                    <button onClick = {() => this.updateTodoToShow('all')}>All</button>
                    <button onClick = {() => this.updateTodoToShow('active')}>Active</button>
                    <button onClick = {() => this.updateTodoToShow('complete')}>Complete</button>
                </div>
                {this.state.todos.some(todo => todo.complete) && 
                    <div>
                        <button onClick={this.removeComplete}>remove all completed</button>
                    </div>
                }
                <div>
                    <button
                        onClick = {() => this.setState({
                            todos: this.state.todos.map(todo => ({
                                ...todo,
                                complete: this.state.toggleAll
                            })),
                            toggleAll: !this.state.toggleAll
                        })}
                    >toggle all</button>
                </div>
            </div>
        )
    }
}
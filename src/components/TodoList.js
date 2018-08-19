import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
    render() {
        return (
            <div className="todoList">
                <div className="notCompleted">
                    {this.props.todos.map(todo =>
                            <Todo
                            key={todo.id}
                            toggleTodo={this.props.toggleTodo}
                            {...todo}
                        />
                    )}
                </div>
            </div>
        );
    }
}

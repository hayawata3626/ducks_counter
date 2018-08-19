import React from "react";

export default class Todo extends React.Component {
    render() {
        // const { increment, decrement, counter } = this.props;
        return (
           <div className="todo">
               <div className="toggleBtn">
                   {this.props.completed ?
                       <div className="complete">完了</div>
                       : <div className="notCompleated">未完了</div>}
               </div>
               <h2 className={this.props.completed ? "completed todo_content" : "todo_content"} onClick={() => this.props.toggleTodo(this.props.id)}>{this.props.text}</h2>
           </div>
        );
    }
}

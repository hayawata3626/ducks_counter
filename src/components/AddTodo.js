import React from "react";

export default class AddTodo extends React.Component {
    render() {
        // const { increment, decrement, counter } = this.props;
        return (
            <div className="addToto">
                <input type="text" className="addToto_input" ref="inputText" />
                <button className="addToto_button" onClick={() => this.props.addTodo(this.refs.inputText.value)
                }>Submit</button>
            </div>
        );
    }
    componentDidMount(){
        console.log(this.refs.inputText.value)
    }
}

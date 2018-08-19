import { connect } from "react-redux";
import * as addTodoModule from "../modules/todo";
import AddTodo from "../components/AddTodo";

const mapStateToProps = state => {
    return {
        todo: state.Todo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (text) => dispatch(addTodoModule.addTodo(text))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo);

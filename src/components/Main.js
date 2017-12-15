import React, {Component} from "react";
import Header from "./Header";
import Todolist from "./Todolist";
import AddNewTodo from "./AddNewTodo";
import { connect } from 'react-redux';
import {addNewTodo, toggleStatus, saveNewTodo } from "../actions";

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Todolist todos={this.props.todoList} onTodoClick={this.props.toggleStatus}/>
                <AddNewTodo addTodoChanged={this.props.addTodoChanged} addTodoValue={this.props.addTodoValue} saveNewTodo={this.props.saveNewTodo} />
            </div>
        );
    }
}

// Maps state from store to props
const mapStateToProps = (state) => {
    return {
        todoList:     state.todoList,
        addTodoValue: state.addTodoValue
    };
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        toggleStatus:   () => dispatch(toggleStatus()),
        addTodoChanged: () => dispatch(addNewTodo()),
        saveNewTodo:    () => dispatch(saveNewTodo())
    };
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Main);

import React from "react";
import { connect } from "react-redux";
import { deleteToDo, toggleComplete } from "../actions";

import "../App.css";

class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    handleToggleComplete = () => {
        this.props.toggleComplete(this.props.index);
    };

    render() {
        return (
            <div>
                <h2 onClick={() => this.handleToggleComplete()}
                className={this.props.todo.completed ? "completed" : "todo" }>
                    {this.props.todo.value}
                    {console.log(this.props.todo)}
                </h2>
                <button onClick={() => this.props.deleteToDo(this.props.index)}>
                    Delete
                </button>
            </div>
        )
    }
}

export default connect(
    null, 
    { toggleComplete, deleteToDo }
)(ToDoItem);

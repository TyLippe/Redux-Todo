import React from "react";
import { connect } from "react-redux";
import { addToDo } from "../actions";

class ToDoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: ""
        };
    }

    handleAdd = e => {
        e.preventDefault();
        this.props.addToDo({ value: this.state.todo, completed: false});
        this.setState({ todo: "" });
    };

    render() {
        return (
            <form onSubmit={this.handleAdd}>
                <input
                    onChange={e => this.setState({ todo: e.target.value})}
                    name="value"
                    value={this.state.todo}
                    placeholder="Gimme something to do!"
                />
                <button>Add</button>
            </form>
        )
    }
}

const mapStatetoProps = state => {
    return {
        todos: state.todos
    };
};

export default connect (
    mapStatetoProps,
    { addToDo }
)(ToDoForm);
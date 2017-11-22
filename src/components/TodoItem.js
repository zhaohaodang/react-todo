import React, { Component } from 'react'
export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            inputValue: this.props.name
        }
    }
    toggleComplete() {
        this.props.toggleComplete(this.props.taskId)
    }
    handleChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    handleEdit() {
        this.setState({ isEditing: true })
    }
    handleSure() {
        this.props.rename(this.props.taskId, this.state.inputValue)
        this.setState({
            isEditing: false
        })
    }
    handleCancel() {
        this.setState({ isEditing: false, inputValue: this.props.name })
    }
    handleRemove() {
        this.props.removeTask(this.props.taskId)
    }
    render() {
        var { taskId, name, isCompleted } = this.props,
            operation = ''
        if (isCompleted) {
            operation = <s>{name}</s>
        } else {
            if (this.state.isEditing) {
                operation =
                    <span>
                        <input type="text" value={this.state.inputValue} onChange={this.handleChange.bind(this)} />
                        &nbsp;&nbsp;
                        <button onClick={this.handleSure.bind(this)}>
                            Sure
                        </button>
                        &nbsp;&nbsp;
                        <button onClick={this.handleCancel.bind(this)}>
                            Cancel
                        </button>
                    </span>
            } else {
                operation =
                    <span>
                        <b>{name}</b>
                        &nbsp;&nbsp;
                        <button onClick={this.handleEdit.bind(this)}>Edit</button>
                    </span>
            }
        }
        return (
            <li key={taskId}>
                <input type="checkbox" checked={isCompleted} onChange={this.toggleComplete.bind(this)} />
                &nbsp;&nbsp;
                {operation}
                &nbsp;&nbsp;
                <button onClick={this.handleRemove.bind(this)}>
                    Remove
                </button>
            </li>
        )
    }
}
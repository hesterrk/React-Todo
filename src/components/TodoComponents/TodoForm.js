import React from 'react';

// Your todo list should display a list of todos, an input field, a submit button, and a clear all button.
//Adding new Task (name)

class ToDoForm extends React.Component {
   
    constructor() {
    
        super();

        this.state = {
            taskName: ''
        };
    
    }

    handleToDoFormChanges = e => {
        this.setState = ({
            taskName: e.target.value
        });
    }


    //add onSubmit: adding a new task functionality 

handleSubmit = e => {

    e.preventDefault();
    this.props.addTask(this.state.taskName)

}




    render() {

        return (
    
            <form onSubmit={this.handleSubmit}>
    
    {/* //leave onchange on the input and add two onClick events to button with the onchange*/}
    <h1>My ToDO's </h1>
    <input type="text" name="task" value={this.state.taskName.task} onChange={this.handleToDoFormChanges}/>
    <button> Add to List</button>

    {/* <button>Clear Completed</button> */}
           
            </form>
        );
    }



}


export default ToDoForm


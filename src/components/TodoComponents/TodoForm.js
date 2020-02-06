import React from 'react';

// Your todo list should display a list of todos, an input field, a submit button, and a clear all button.
//Adding new Task (name)

class ToDoForm extends React.Component {
   
    constructor(props) {
    
        super(props);

        this.state = {
            taskName: ""
        };
    
    }

    handleToDoFormChanges = e => {
        this.setState({
            
            taskName: e.target.value
        });
        
    };

    //add onSubmit: adding a new task functionality 

handleSubmit = e => {

    e.preventDefault();
    this.props.addTask(this.state.taskName)

}




    render() {

        return (
    
            <form>
    
    {/* //leave onchange on the input and add two onClick events to button with the onchange*/}
    <h1>My ToDO's </h1>
    <label>
    <input type="text" name="task" placeholder="todo" value={this.state.taskName.task} onChange={this.handleToDoFormChanges}/></label>
    <button onClick={this.handleSubmit}> Add to List</button>

    <button className="clear" onClick={this.props.clearPurchased}>Clear Completed</button>
          
            </form>
        );
    }



}


export default ToDoForm


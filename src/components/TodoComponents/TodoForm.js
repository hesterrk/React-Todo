import React from 'react';
import styled from "styled-components";


const Input = styled.input `
border: 2px solid lavender;
border-radius: 2px;
margin-bottom: 10px;
margin-right: 5px;
`



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
    
    <label>
    <Input type="text" name="task" placeholder="todo" value={this.state.taskName.task} onChange={this.handleToDoFormChanges}/></label>
    <button onClick={this.handleSubmit}> Add to List</button>

    {/* //we now want for those toggled to be removed when we click on clear button */}

    <button className="clear" onClick={this.props.clearPurchased}>Clear Completed</button>
          
            </form>
        );
    }



}


export default ToDoForm



import React from 'react';
import './Todo.css';
//takes in the `todo` data and displays the task to the screen.
//style so crosses out 
//like Item 
 /* //if we double click we initialise the toggle function (completed property gets changed from false-->true) */


const ToDo = props => {


    return (

    
        <div className="taskContainer">
        
          <span style={props.item.completed ? {textDecoration: 'line-through'} : null } onClick={() => props.toggle(props.item.id)} > 

        <p >{props.item.task}</p> </span>

        </div>

    
    )

}

export default ToDo
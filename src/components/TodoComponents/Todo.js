
import React from 'react';
import './Todo.css';
//takes in the `todo` data and displays the task to the screen.
//style so crosses out 
//like Item 



const ToDo = props => {
console.log(props.item);

    return (

        //if we double click we initialise the toggle function (completed property gets changed from false-->true)
        //we now want for those toggled to be removed when we click on clear button
        <div className="taskContainer" onClick={() => props.toggle(props.item.id)}>


        <p >{props.item.task}</p>

        </div>
    )

}

export default ToDo

import React from 'react';
import './Todo.css';
//takes in the `todo` data and displays the task to the screen.
//style so crosses out 
//like Item 



const ToDo = props => {
console.log(props.item);

    return (

        <div onClick={() => props.toggle(props.item.id)} className="taskContainer">

        <p>{props.item.task}</p>

        </div>
    )

}

export default ToDo
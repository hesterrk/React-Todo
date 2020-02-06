
import React from 'react';
import './Todo.css';
//takes in the `todo` data and displays the task to the screen.
//style so crosses out 
//like Item 



const ToDo = props => {


    return (

        <div className="taskContainer">

<p>{props.item.task}</p>


        </div>
    )

}

export default ToDo
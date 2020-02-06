import React from "react";
import ToDo from "./Todo";

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
// receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.



const ToDoList = props => {


    return (

        <div>

{props.list.map(item => (
    <ToDo key={item.id} item={item} toggle={props.toggle} />
))}


        </div>
    );

}

export default ToDoList
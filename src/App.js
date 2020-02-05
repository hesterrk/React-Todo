import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import ToDoList from './components/TodoComponents/TodoList';

// All of your `handler` functions should live here on `<App />`.
 // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state
  //- Add the functionality to toggle your todo's completed flag from `false` to `true`.
//  - Once a todo is completed, be sure to demonstrate to the user that the todo is completed by adding a line-through style property if the completed flag is true: to-do.css style 
//- Add the ability to remove any todos that you have completed. `.filter` will be your best friend here. When a user clicks on the `Clear Completed` button call your handler function that will filter out any todos that have the completed flag toggled to `true`.
//- The `id` field is a unique `Time Stamp` that will be assigned by `Date.now()`.



const list = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }

];



class App extends React.Component {
 
  //adding state 
  constructor() {

    super();

    this.state = {
      myList: list
    };

  }

  //adding a new task to our data 

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false

    }

    this.setState({
      myList: [...this.state.myList, newTask]


    });
  }




  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

{/* //pass down functionlity to add item */}
        <TodoForm addTask={this.addTask}/>

        <ToDoList list={this.state.myList}/>
      </div>
    );
  }
}

export default App;

import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import ToDoList from './components/TodoComponents/TodoList';
import SearchBar from './components/TodoComponents/SearchBar';
import styled from "styled-components";

// All of your `handler` functions should live here on `<App />`.
 // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state
  //- Add the functionality to toggle your todo's completed flag from `false` to `true`.
//  - Once a todo is completed, be sure to demonstrate to the user that the todo is completed by adding a line-through style property if the completed flag is true: to-do.css style 
//- Add the ability to remove any todos that you have completed. `.filter` will be your best friend here. When a user clicks on the `Clear Completed` button call your handler function that will filter out any todos that have the completed flag toggled to `true`.
//- The `id` field is a unique `Time Stamp` that will be assigned by `Date.now()`.


const Div = styled.div `
border: 6px lavenderblush dotted;
width: 50%;
margin-left: 10px;
padding-left: 20px;

`

const H2 = styled.h2 `
font-family: monospace;
font-size: 2rem;
color: lavender;
background: #AA076B;
width: 50%;
padding-top: 20px;
padding-bottom: 20px;
border-radius: 5px;
display: flex;
justify-content: center;

`

const Span = styled.span `
display: flex;
justify-content: center;
margin-bottom: 10px;
`




const list = [
  {
    task: 'organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'bake Cookies',
    id: 1528817084358,
    completed: false
  }

];



class App extends React.Component {
 
  //adding state of list 
  constructor() {

    super();

    this.state = {
      myList: list, 
      taskName: ""
  
    };

  }

//form functionality

handleToDoFormChanges = e => {
  this.setState({

      taskName: e.target.value
  });
  
};



//when we click on item it will get changed from false to true so it will go to complete

toggleItem = id => {

const newList = this.state.myList.map(item => {
  if(item.id === id) {
    return {
      ...item,
      completed: !item.completed
    }
  } else {
    return item
  }
})

this.setState ({
  myList: newList
});


}


  //adding a new task to our data 

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false

    }

    this.setState ({
      myList: [...this.state.myList, newTask]


    });
  }

  //clearing completed items 

  clearPurchased = (e) => {
    e.preventDefault();
      const clearState =  this.state.myList.filter(item => 
           !item.completed
        );
        this.setState({
          myList: clearState
        });
        
      }

      
      //form functionality 

      handleSubmit = e => {
        e.preventDefault();
        this.addTask(this.state.taskName)
      
      }




  render() {
    return (
      <div>
        <Span>
        <H2>Mei To-Do App</H2></Span>

      <Div className="wrapper">
      <SearchBar initialstate={this.state.myList} />
{/* //pass down functionlity to add item */}
        <TodoForm addTask={this.addTask} initialstate={this.state.myList}
        clearPurchased={this.clearPurchased} 
       
        taskState={this.state.taskName}
        handleSubmit={this.handleSubmit}
        handleToDoFormChanges={this.handleToDoFormChanges}
        />

        <ToDoList list={this.state.myList} toggle={this.toggleItem}/>
      
   
      </Div>
      </div>
    );
  }
}

export default App;



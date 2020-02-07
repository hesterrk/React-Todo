import React from 'react';
import styled from "styled-components";

const H4 = styled.h4 `
font-family: monospace;
font-size: 1.3rem;
`
const Input = styled.input `
border: 2px solid lavender;
border-radius: 2px;
margin-bottom: 10px;
`


//1. get data of task from app
//2. set this data to new state here 
//3. another property state here inside state to store 

class SearchBar extends React.Component {


constructor(props) {

    super(props);


    //the filtered result will go in this state
    this.state = {
      value: ''
    }
}




handleSubmit = e => {
    e.preventDefault();

}


// handleSearchChanges = e => {
//     this.setState({
//         filteredTasks: e.target.value
//     })
// }

//       filter = () => {
//         const result = this.state.myList.filter(search => search.task.toLowerCase().includes(this.state.filteredTasks.toLowerCase()))
    
//         this.setState({
//             myList: result
//         })
//     };


handleSearchChanges = e => {


    this.setState({
        value: e.target.value
    })

}




render() {
    return (

        <form onSubmit={this.handleSubmit}>
            <H4>Search bar</H4>

<label>
        <Input
    type="text"
    name="search"
    placeholder="search task..."
    onChange={this.handleSearchChanges}
    value={this.state.value}

/>
        
</label>

        </form>
    )
}




}

export default SearchBar
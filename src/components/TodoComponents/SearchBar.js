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
    //could put props from app state in here
    //initialstate: props.initialstate
    this.state = {
        theItemObject: {
            searchedTaskName: ""
        }
    }
}




handleSubmit = e => {
    e.preventDefault();

}




handleSearchChanges = e => {


    this.setState({
        theItemObject: {
            ...this.state.theItemObject,
            searchedTaskName: e.target.value
        }
    })


}

//this should be on App, pass down function as props: initialise it and then the valye should be the local state on here
matchingSeaches = e => {
    e.preventDefault();
    this.state.theItemObject.searchedTaskName &&this.props.initialState.filter(item => {
        return item.searchedTaskName.toLowerCase().includes(this.state.theItemObject.searchedTaskName.toLowerCase())

    });

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
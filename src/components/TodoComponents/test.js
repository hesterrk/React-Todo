// SEARCH COMPONENT 

//  the FILTERED result will go in this state(like filterCharacter)
//  this.state = {
//     filteredTasks: []
// }


//Need a handleChange function which assigns state to the e.target.value: like matchCharacter

// handleSearchChanges = e => {
//     this.setState({
//         filteredTasks: e.target.value
//     })
// }





// APP COMPONENT : Our original data list is here 

//need a filtered function : which will then pass to props to Search component as onChange handler 

// filter = () => {
//     const result = this.state.myList.filter(search => search.task.toLowerCase().includes(this.state.filteredTasks.toLowerCase()))

//     this.setState({
//         myList: result
//     })
// }

// useEffect(() => {
//     filter(this.state.filteredTasks)
// }, [this.state.filteredTasks])
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


class SearchBar extends React.Component {





render() {
    return (

        <form>
            <H4>Search bar</H4>

<label>
        <Input
    type="text"
    name="search"
    placeholder="search task..."
    //value, onChange

/>
        
</label>

        </form>
    )
}




}

export default SearchBar
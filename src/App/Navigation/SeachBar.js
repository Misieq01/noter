import React from "react";
import styled from "styled-components";


const SearchInput = styled.input`
  padding: 10px 16px 10px 24px;
  width: 35%;
  height: 45px;
  font-size: 21px;
  display: inline-block;
  border-radius: 45px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  text-decoration: none;
  opacity: 0.6;
  transition: all 0.2s ease;
  :focus {
    opacity:0.9;
  }
  ::placeholder {
    color:black;
  }
`;

const SearchBar = ({GetSearchValue,...props}) => {


  return <SearchInput placeholder='Search for notes' onChange={event=>GetSearchValue(event)}/>;
};

export default SearchBar;

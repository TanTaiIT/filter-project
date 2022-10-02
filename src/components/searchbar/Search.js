import React from 'react'
import './Search.css'
import {BsSearch} from 'react-icons/bs'
const Search = ({ChangeInput,value}) => {
  return (
    <div className="search">
        <div className="search-icons">
            <BsSearch/>
        </div>
        <div className="search-input">
            <input type="text" value={value} className="search_input1"  placeholder='Woodsland Hills' onChange={(e)=> ChangeInput(e.target.value)}/>
        </div> 
    </div>
  )
}

export default Search
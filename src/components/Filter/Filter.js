import React,{useEffect, useState} from 'react'
import './Filter.css'
import {categoryList} from './../../Data/Database'
import {ratingList} from './../../Data/Database'
import { dataList } from './../../Data/Database'
import ReactSlider from 'react-slider'
import { findMax } from '../../utils/function'

const Filter = ({category,cuisines,selectCategory,range,handleChangePrice,checkboxChange,handleChangeRating,selectRating}) => {
    const handleClick=(item)=>{
        const lower = item.toLowerCase()
        category(lower)
    }
    const changeRating = (item)=>{
        handleChangeRating(item)
    }
  return (
    <div className="filter">
        <h3>Category</h3>
        <div className="btn-flex">
            {
                categoryList.map((item)=>{
                    return(
                        <button key={item.id} type="button" onClick={()=>handleClick(item.value)} className={selectCategory === item.value ? `btn-cate active` : `btn-cate`}>{item.label}</button>
                    ) 
                })
            }
            
            {/* <button type="button" className="btn-cate">Dishes</button> */}
        </div>
        <h3>Cuisine</h3>
        <div className="location">
            {
                cuisines.map((item)=>{
                    return(
                        <div className="location-item" key={item.id}>
                            <label htmlFor={item.label}>{item.label}</label>
                            <input type="checkbox" id={item.label} checked={item.checked} onChange={()=>checkboxChange(item.id)}/>
                        </div>
                    )
                })
            }
        </div>
        <h3>Price Range</h3>
        <div className="slider">
            <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                value={range}
                min={1000}
                max={5000}
                onChange={handleChangePrice}
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
            />
        </div>
        

        <h3>Star Rating</h3>
        <div className="location1">
            {
                ratingList.map((item)=>{
                    return(
                        <div className="location1-item" key={item.id}>
                            <button onClick={()=>changeRating(item.value)} type="button" className={selectRating === item.value ? `btn-rating active` : `btn-rating`}>{item.label}</button>
                        </div>
                    )
                })
            }
        </div>
        

    </div>
  )
}

export default Filter
import React, { useEffect, useState } from 'react'
import Filter from '../components/Filter/Filter'
import List from '../components/List/List'
import Search from '../components/searchbar/Search'
import { dataList } from '../Data/Database'

import './Home.css'
const Home = () => {
  const [selectCategory,setSelectCategory] = useState(null)
  const [selectRating,setSelectRating] = useState(null)
  const [selectPrice,setSelectPrice] = useState(0)
  const [cuisines, setCuisines] = useState([
    { id: 1, checked: false, label: 'American' },
    { id: 2, checked: false, label: 'Chinese' },
    { id: 3, checked: false, label: 'Italian' },
  ]);
  const [list,setList] = useState(dataList)
  const [input,setInput] = useState('')
  const handleCategory = (value)=>{
    return !value ? null : setSelectCategory(value)
  }
  const handleChangePrice = (value)=>{
    setSelectPrice(value)
  }
  const handleChangeRating = (label)=>{
    return !label ? null : setSelectRating(label)
  }
  const checkboxChange = (id) =>{
    const cuisinesList = cuisines
    const checkList = cuisinesList.map((item) => {
      return item.id === id ? {...item,checked: !item.checked} : item
    })
    setCuisines(checkList)
  }
  
  useEffect(()=>{
    const applyFilter = ()=>{
      let newList = dataList
      if(selectCategory){
        newList = newList.filter((item)=> item.category === selectCategory)
      }
      newList = newList.filter((news)=> news.price < selectPrice)
      if(selectRating){
        newList = newList.filter((item)=> parseInt(item.rating) === parseInt(selectRating))
      }
      let cuisinChecked = cuisines.filter((item)=> item.checked===true).map((ite)=> ite.label.toLocaleLowerCase())
      if(cuisinChecked.length > 0){
        newList = newList.filter((cui)=> cuisinChecked.includes(cui.cuisine))
      }
      setList(newList)
    }
    applyFilter()
  },[selectCategory,selectPrice,selectRating,cuisines])
  return (
    <div className="home">
        <Search value={input} ChangeInput={setInput}/>
        <div className="content">
          <Filter selectRating={selectRating} handleChangeRating={handleChangeRating} checkboxChange={checkboxChange} category={handleCategory} cuisines={cuisines} selectCategory={selectCategory} range={selectPrice} handleChangePrice={handleChangePrice}/>
          <List list={list}/>
        </div>
        
    </div>
  )
}

export default Home
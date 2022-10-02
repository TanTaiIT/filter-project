import React from 'react'
import './List.css'
const List = ({list}) => {
  return (
    <div className="list">
        <div className="list-contain">
            {
                list.map((item)=>{
                    return(
                        <div className="list-item" key={item.id}>
                            <div className="img-item">
                                <img src={item.coverSrc} alt={item.title} />
                            </div>
                            <div className="item-content">
                                <div className="title-content">
                                    <h6>{item.title}</h6>
                                    <span className="rating">{item.rating}</span>
                                </div>
                                <div className="time-price">
                                    <div><span>10-18min</span><span className="grey">delivery</span></div>
                                    <span>{item.price}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    </div>
  )
}

export default List
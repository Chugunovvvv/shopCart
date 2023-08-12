import React from 'react'
import arrowUp from '../../img/arrow-up.svg'
import arrowDown from '../../img/arrow-down.svg'
import '../count/count.scss'
const Count = ({count, increase, decrease, changeValue, id}) => {
    


  return (
    <div className="count">
    <div className="count__box">
        <input onChange={(e) => {changeValue(id, +e.target.value)}} type="number" className="count__input" min="1" max="100" value={count}/>
    </div>
    <div className="count__controls">
        <button className="count__up" type="button" onClick={() => {increase(id)}}>
            <img src={arrowUp} alt=""/>
        </button>
        <button  onClick={() => {decrease(id)}} className="count__down" 
        type="button">
            <img src={arrowDown} alt=""/>
        </button>
    </div>
</div>

  )
}

export default Count
import React from 'react'
import '../deleteBtn/deleteBtn.scss'
import close from '../../img/close.svg'
const DeleteBtn = ({deleteProduct, id}) => {
  return (
    
        <button onClick={() => {deleteProduct(id)}}  className="product__contols-btn"  type="button"><img src={close} alt=""/></button>
   
  )
}

export default DeleteBtn
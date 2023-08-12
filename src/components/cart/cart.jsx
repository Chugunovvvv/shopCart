import React from 'react'
import priceFormater from '../../utils/priceFormater'
import '../cart/cart.scss'
import Count from '../count/Count'
import DeleteBtn from '../deleteBtn/deleteBtn'




const Cart = ({tovar, deleteProduct, increase, changeValue, decrease}) => {
  const {img, title, priceTotal, count, id} = tovar;
  
  

  return (
    <section className="product">
    <div className="product__img">
        <img src={img} alt="macBook"/>
    </div>
    <div className="product__title">{title}
    </div>
    <div className="product__count">
       <Count count={count} increase={increase} decrease = {decrease} changeValue={changeValue} id={id}/>


    </div>
    <div className="product__price">

    {priceFormater(priceTotal)}  руб.
     </div>
    <div className="product__contols">
        <DeleteBtn deleteProduct={deleteProduct} id={id}/>
    </div>


</section>
  )
}

export default Cart
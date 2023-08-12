import React from 'react'
import '../footer/footer.scss'
import priceFormater from '../../utils/priceFormater'
const Footer = ({total}) => {
  const {count, price} = total
  return (
    
    <footer className="cart__footer">
    <div className="cart__footer-count">{count} ед.</div>
    <div className="cart__footer-price">{priceFormater(price)} руб.</div>
</footer>
  )
}

export default Footer
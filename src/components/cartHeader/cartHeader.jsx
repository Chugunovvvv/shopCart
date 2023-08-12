import React from 'react'
import '../cartHeader/cartHeader.scss'

const CartHeader = () => {
  return (
    <header className="cart__header">
                <div className="cart-header__title">Наименование</div>
                <div className="cart-header__count">Количество</div>
                <div className="cart-header__cost">Стоимость</div>
            </header>
  )
}

export default CartHeader
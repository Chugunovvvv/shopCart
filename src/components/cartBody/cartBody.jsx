import React, { useEffect, useState } from 'react'
import CartHeader from '../cartHeader/cartHeader'
import Footer from '../footer/footer'
import Cart from '../cart/cart'
import {products} from '../../helpers/product'
const CartBody = () => {

  
  const [cart, setCart] = useState(products)
  const [total, setTotal] = useState({
    price: cart.reduce((prev, curr) => {return prev + curr.priceTotal}, 0),
    count: cart.reduce((prev, curr) => {return prev + curr.count}, 0)
  })

  useEffect(() => {   // подсчет корзины с изменением товаров
    setTotal(
      { price: cart.reduce((prev, curr) => {return prev + curr.priceTotal}, 0),
        count: cart.reduce((prev, curr) => {return prev + curr.count}, 0)
      }
    )
  }, [cart])


  // удаление товара  // первый параметр карт это текущее состояние и возвращаем товары, которые мы отфильтровали по айди (если айди продукта равен айди который хотим удалить, то не будем возвращать в новый массив)
  const deleteProduct = (id) => {
    setCart((cart) => cart.filter((tovar) => id !== tovar.id) 
    )
  }

  // увеличение товаров
  const increase = (id) => {      // действуем также как и в прерыдущем шаге основываясь на текущую корзину карт
    console.log('increase', id)
    
    setCart((cart) => {  // основываемся на текующую карт и создаем новый массив с проверкой
      return cart.map((tovar) => {
        if (tovar.id === id) {  // если сейчас на итерации находится товар с айди, по которому мы кликнули и должны увеличить
          const newCount = tovar.count + 1;  // увеличиваем
          return {
            ...tovar,  // деструктурием обьект и меняем в нем значения числа
            count: newCount,
            priceTotal: (newCount) * tovar.price
          };
        } 
        return tovar
      })
    })
  }

  // уменьшение товара              все тоже самое, только меняем расчеты и доп проверка чтобы меньше 1 нельзя было изменить счетчик
  const decrease = (id) => {
    console.log('decrease', id)
    
    setCart((cart) => {
      return cart.map((tovar) => {
        if (tovar.id === id) {
          
          const newCount = tovar.count - 1 > 1 ? tovar.count - 1 : 1;
          return {
            ...tovar,
            count: newCount,
            priceTotal: newCount * tovar.price
          };
        } 
        return tovar
      })
    })
  }

// изменение инпута с клавиатуры

const changeValue = (id, value) => {
   setCart((cart) => {
    return cart.map((tovar) => {
      if (tovar.id === id) {
        return {
          ...tovar,
          count: value,
          priceTotal: value * tovar.price
        }
      }
      return tovar
    })
   })
}




  // отображение всех товаров       пробегаемся по всему массиву с объетками и выводим каждый товар (записали в переменную товары)
  const tovars = cart.map((tovar) => {
    return( <Cart tovar={tovar} key={tovar.id} deleteProduct={deleteProduct} increase={increase} decrease={decrease} changeValue={changeValue}/>)
  })


  return (
    <div className="section-cart__body">
    <div className="container">

        <section className="cart">
            <CartHeader/>
           {tovars}
            
            <Footer total={total}/>

        </section>

    </div>
</div>
  )
}

export default CartBody
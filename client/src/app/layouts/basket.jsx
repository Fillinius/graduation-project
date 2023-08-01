import React from 'react';
import Counter from '../components/common/counter';
import StatusBuyItems from '../components/common/statusBuyItems';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { useFurniturs } from '../hooks/useFurniturs';

const Basket = () => {
  const { furniturs } = useFurniturs()

  const handleDeleteItem = (id) => {
    // setItems(prevStates => prevStates.filter((prevState) => prevState._id !== id))
  }
  const hahdleReset = () => {
    // setItems([])
  }
  const renderitemsList = () => {
    return furniturs.length !== 0 && (
      <div>
        {furniturs.map((item) => (
          <Counter
            key={item._id}
            id={item._id}
            name={item.name}
            price={item.price}
            onDelete={handleDeleteItem}
          />
        ))}
        <button
          className='btn btn-secondary'
          onClick={hahdleReset}>Очистка корзины</button>
        <NavLink to='/basket/order'>Оформить заказ</NavLink>
      </div>
    )
  }
  if (furniturs.length !== 0) {
    return (
      <>
        <h1>Корзина</h1>
        <span>
          <StatusBuyItems
            listItem={furniturs.length}
          />
        </span>
        <ul>
          {renderitemsList()}
        </ul>
      </>
    )
  }
  return (
    <div className='m-5'>
      <h1>Корзина</h1>
      <span className={'badge' + (furniturs.length > 0 ? 'bg-primary' : 'bg-danger')}>Вы еще не положили товары в корзину</span>
    </div>
  )
}

export default Basket;

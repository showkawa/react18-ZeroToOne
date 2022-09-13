import './App.css';
import React, { useEffect, useReducer } from 'react'
import Meals from './component/Meals/Meals';
import CartContext from './store/CartContext';
import FilterMeals from './component/FilterMeals/FilterMeals';
import Cart from './component/Cart/Cart';
import useFetch from './hocks/useFetch';
import { configureStore } from '@reduxjs/toolkit';


const cartsReducer = (params, action) => {
  const newCarts = { ...params };
  switch (action.type) {

    case 'ADD':
      if (newCarts.items.indexOf(action.meal) === -1) {
        newCarts.items.push(action.meal);
        action.meal.attributes.amount = 1;
      } else {
        action.meal.attributes.amount += 1;
      }
      newCarts.totalAmount += 1;
      newCarts.totalPrice += action.meal.attributes.price;
      return newCarts;

    case 'REMOVE':
      if (--action.meal.attributes.amount <= 0) {
        newCarts.items.splice(newCarts.items.indexOf(action.meal), 1);
      }
      newCarts.totalAmount -= 1;
      newCarts.totalPrice -= action.meal.attributes.price;
      return newCarts;

    case 'CLEAR':
      newCarts.items.forEach(item => delete item.attributes.amount);
      newCarts.items = [];
      newCarts.totalAmount = 0;
      newCarts.totalPrice = 0;
      return newCarts;

    default:
      return params;
  }
}


// const store = configureStore(cartsReducer, {
//   items: [],
//   totalAmount: 0,
//   totalPrice: 0
// });

// store.subscribe(() => { })

// store.dispatch(() => { })

function App() {

  const [carts, cartsDispatch] = useReducer(cartsReducer, {
    items: [],
    totalAmount: 0,
    totalPrice: 0
  });

  const { data: meals, setData: setMeals, loading, fetchData } = useFetch({
    api: '/hanbaos',
    method: 'get'
  });

  useEffect(() => {
    fetchData();
  }, []);

  const filterItems = (keyword) => {
    const filteredMeals = meals.filter(item => item.attributes.title.indexOf(keyword) !== -1);
    setMeals(filteredMeals);
  }

  return (
    // <CartContext.Provider value={{ ...carts, addItem, removeItem, clearItem }}>
    <CartContext.Provider value={{ ...carts, cartsDispatch }}>
      <FilterMeals onFilter={filterItems} />
      {!loading && <Meals meals={meals} />}
      {loading && <p>Loading...</p>}
      <Cart />
    </CartContext.Provider>

  );
}

export default App;

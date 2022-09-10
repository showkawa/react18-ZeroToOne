import './App.css';
import React, { useEffect, useReducer } from 'react'
import Meals from './component/Meals/Meals';
import CartContext from './store/CartContext';
import FilterMeals from './component/FilterMeals/FilterMeals';
import Cart from './component/Cart/Cart';


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

function App() {

  useEffect(() => {
    fetch(`http://localhost:1337/api/hanbaos`)
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res.data)
        setTimeout(()=> setMeals(res.data),500);
      })
      .catch(error => { console.error(error) })
      .finally(() => { })
  }, []);

  const [carts, cartsDispatch] = useReducer(cartsReducer, {
    items: [],
    totalAmount: 0,
    totalPrice: 0
  });

  const [meals, setMeals] = React.useState([]);

  // const [carts, setCarts] = React.useState({
  //   items: [],
  //   totalAmount: 0,
  //   totalPrice: 0
  // });

  // add hanbao
  // const addItem = (meal) => {

  //   const newCarts = { ...carts };
  //   // estimate if currant meal in the carts
  //   if (newCarts.items.indexOf(meal) === -1) {
  //     newCarts.items.push(meal);
  //     // update amount
  //     meal.amount = 1;
  //   } else {
  //     meal.amount += 1;
  //   }

  //   newCarts.totalAmount += 1;

  //   newCarts.totalPrice += meal.price;

  //   setCarts(newCarts);
  // }

  // sub hanbao
  // const removeItem = (meal) => {

  //   const newCarts = { ...carts };
  //   // estimate if currant meal in the carts
  //   if (--meal.amount <= 0) {
  //     // remove meal from carts
  //     newCarts.items.splice(newCarts.items.indexOf(meal), 1);
  //   }

  //     newCarts.totalAmount -= 1;
  //     // update price
  //     newCarts.totalPrice -= meal.price;

  //     setCarts(newCarts);
  // }
  // const clearItem = () => {

  //   const newCarts = { ...carts };
  //   newCarts.items.forEach(item => delete item.amount);

  //   newCarts.items = [];
  //   newCarts.totalAmount = 0;
  //   newCarts.totalPrice = 0;
  //   setCarts(newCarts);
  // }

  const filterItems = (keyword) => {
    const filteredMeals = meals.filter(item => item.attributes.title.indexOf(keyword) !== -1);
    setMeals(filteredMeals);
  }

  return (
    // <CartContext.Provider value={{ ...carts, addItem, removeItem, clearItem }}>
    <CartContext.Provider value={{ ...carts, cartsDispatch }}>
      <FilterMeals onFilter={filterItems} />
      <Meals meals={meals} />
      <Cart />
    </CartContext.Provider>

  );
}

export default App;

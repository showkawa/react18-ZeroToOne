import './App.css';
import React from 'react'
import Meals from './component/Meals/Meals';
import CartContext from './store/CartContext';
import FilterMeals from './component/FilterMeals/FilterMeals';
import Cart from './component/Cart/Cart';

const MEAL_DATA = [
  {
    id: 1,
    title: '鲜虾汉堡',
    desc: '大堡口福桶含1个新奥尔良烤鸡腿堡，2块新奥尔良烤翅，2块香辣鸡翅，1块吮指原味鸡，1个红豆派，1份醇香土豆泥，2杯百事可乐',
    price: 18,
    img: '/image/meals/1.png',
  },
  {
    id: 2,
    title: '老干妈汉堡',
    desc: '大堡口福桶含1个新奥尔良烤鸡腿堡，2块新奥尔良烤翅，2块香辣鸡翅，1块吮指原味鸡，1个红豆派，1份醇香土豆泥，2杯百事可乐',
    price: 25,
    img: '/image/meals/2.png',
  },
  {
    id: 3,
    title: '周黑鸭汉堡',
    desc: '大堡口福桶含1个新奥尔良烤鸡腿堡，2块新奥尔良烤翅，2块香辣鸡翅，1块吮指原味鸡，1个红豆派，1份醇香土豆泥，2杯百事可乐',
    price: 28,
    img: '/image/meals/3.png',
  },
  {
    id: 4,
    title: '鱼面汉堡',
    desc: '大堡口福桶含1个新奥尔良烤鸡腿堡，2块新奥尔良烤翅，2块香辣鸡翅，1块吮指原味鸡，1个红豆派，1份醇香土豆泥，2杯百事可乐',
    price: 15,
    img: '/image/meals/4.png',
  },
  {
    id: 5,
    title: '咸鸭蛋汉堡',
    desc: '大堡口福桶含1个新奥尔良烤鸡腿堡，2块新奥尔良烤翅，2块香辣鸡翅，1块吮指原味鸡，1个红豆派，1份醇香土豆泥，2杯百事可乐',
    price: 12,
    img: '/image/meals/5.png',
  },
  {
    id: 6,
    title: '佛跳墙汉堡',
    desc: '大堡口福桶含1个新奥尔良烤鸡腿堡，2块新奥尔良烤翅，2块香辣鸡翅，1块吮指原味鸡，1个红豆派，1份醇香土豆泥，2杯百事可乐',
    price: 88,
    img: '/image/meals/6.png',
  }];


function App() {

  const [meals, setMeals] = React.useState(MEAL_DATA);

  const [carts, setCarts] = React.useState({
    items: [],
    totalAmount: 0,
    totalPrice: 0
  });

  // add hanbao
  const addItem = (meal) => {

    const newCarts = { ...carts };
    // estimate if currant meal in the carts
    if (newCarts.items.indexOf(meal) === -1) {
      newCarts.items.push(meal);
      // update amount
      meal.amount = 1;
    } else {
      meal.amount += 1;
    }

    newCarts.totalAmount += 1;

    newCarts.totalPrice += meal.price;

    setCarts(newCarts);
  }

  // sub hanbao
  const removeItem = (meal) => {

    const newCarts = { ...carts };
    // estimate if currant meal in the carts
    if (--meals.amount <= 0) {
      // remove meal from carts
      newCarts.items.splice(newCarts.items.indexOf(meal), 1);
    } else {
      // update amount
      meal.amount -= 1;

      newCarts.totalAmount -= 1;
      // update price
      newCarts.totalPrice -= meal.price;

      setCarts(newCarts);
    }
  }
  const clearItem = () => {
    
    const newCarts = { ...carts };
    newCarts.items.forEach(item => delete item.amount);

    newCarts.items = [];
    newCarts.totalAmount = 0;
    newCarts.totalPrice = 0;
    setCarts(newCarts);
  }

  const filterItems = (keyword) => {
    console.log(keyword)
    const filteredMeals = MEAL_DATA.filter(item => item.title.indexOf(keyword) !== -1);
    console.log({ ...filteredMeals })
    setMeals(filteredMeals);
  }

  return (
    <CartContext.Provider value={{ ...carts, addItem, removeItem, clearItem }}>
      <FilterMeals onFilter={filterItems} />
      <Meals meals={meals} />
      <Cart />
    </CartContext.Provider>

  );
}

export default App;

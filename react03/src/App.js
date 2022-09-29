import './App.css';
import React, { useReducer, useState } from 'react'
import CartContext from './store/CartContext';
import { Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Shopping from './component/Shopping/Shopping';
import Member from './component/Member/Member';
import Bonus from './component/Bonus/Bonus';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import { Link, Redirect, Switch, useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Wechat from './component/Bonus/Wechat/Wechat';
import Login from './component/Login/Login';

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

  const [carts, cartsDispatch] = useReducer(cartsReducer, {
    items: [],
    totalAmount: 0,
    totalPrice: 0
  });

  const [value, setValue] = useState('/');
  const [hide, setHide] = useState(false);

  const _history = useHistory();

  const gotoHander = (event, newValue) => {
    setValue(newValue);
    _history.push(newValue);
  }

  const homeProps = {
    name: 'hanbao'
  }

  const memberProps = {
    name: 'member',
    params: {}

  }
  const hideMenu = () => {
    setHide(true);
  }

  return (
    <CartContext.Provider value={{ ...carts, cartsDispatch }}>

      {!hide && <>
        <Route exact path='/' children={<Home {...homeProps} />} />
        <Route path='/bonus' component={Bonus} />
        <Switch>
          <Route exact path='/bonus/wechat' component={Wechat} />
        </Switch>
        <Route exact path='/shopping' component={Shopping} onClick={hideMenu} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/login-out' component={Login} />
        <Route path='/member' render={() => <Member {...memberProps} />} />


        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={1}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={gotoHander}
          >
            <BottomNavigationAction label="Home" value="/" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Bonus Plan" value="/bonus" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Store" value="/shopping" icon={<ArchiveIcon />} />
            <BottomNavigationAction label="Member" value={`/member/${homeProps.name}`} icon={<ArchiveIcon />} />
          </BottomNavigation>
        </Paper></>}

    </CartContext.Provider>

  );
}

export default App;

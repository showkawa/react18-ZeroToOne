import './App.css';
import React, { useReducer, useState } from 'react'
import CartContext from './store/CartContext';
import { Route, Switch, useHistory } from 'react-router-dom';
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
import Login from './component/Login/Login';
import Auth from './component/Auth/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './store/MemberSlice';
import { useEffect } from 'react';

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

  const { expirationTime } = useSelector(state => state.member);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = expirationTime - Date.now();
    const timer = setTimeout(() => {
      dispatch(logout());
    }, timeout);

    return () => {
      clearTimeout(timer);
    }
  }, [expirationTime])

  return (
    <CartContext.Provider value={{ ...carts, cartsDispatch }}>

      {!hide &&
        <>
          <Switch>
            <Route exact path='/'>
              <Home {...homeProps} />
            </Route>
            <Route path='/bonus'>
              <Bonus />
            </Route>
            <Auth exact path='/shopping' onClick={hideMenu}>
              <Shopping />
            </Auth>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route exact path='/login-out'>
              <Login />
            </Route>
            <Route path='/member'>
              <Member {...memberProps} />
            </Route>
          </Switch>

          <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={1}>
            <BottomNavigation
              showLabels
              value={value}
              onChange={gotoHander}>
              <BottomNavigationAction label="Home" value="/" icon={<RestoreIcon />} />
              <BottomNavigationAction label="Bonus Plan" value="/bonus" icon={<FavoriteIcon />} />
              <BottomNavigationAction label="Store" value="/shopping" icon={<ArchiveIcon />} />
              <BottomNavigationAction label="Member" value={`/member/${homeProps.name}`} icon={<ArchiveIcon />} />
            </BottomNavigation>
          </Paper>
        </>}

    </CartContext.Provider>

  );
}

export default App;

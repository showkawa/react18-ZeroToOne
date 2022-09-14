import { useEffect, useReducer } from "react";
import useFetch from "../../hocks/useFetch";
import Cart from "./Cart/Cart";
import FilterMeals from "./FilterMeals/FilterMeals";
import Meals from "./Meals/Meals";


const Shopping = (props) => {
    
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
        <>
            <FilterMeals onFilter={filterItems} />
            {!loading && <Meals meals={meals} />}
            <Cart />
        </>
    );
}

export default Shopping;
import React, { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from './FilterMeals.module.css';

const FilterMeals = (props) => {

    // const [keyword, setKeyword] = useState('');

    const inputChangeHandler = e => {
        const keyword = e.target.value.trim();
        props.onFilter(keyword)
    }
    return (<div className={classes.FilterMeals}>
        <div className={classes.InputOuter}>
            <input
                className={classes.SearchInput}
                type="text"
                placeholder={"请输入关键字"}
                onChange={inputChangeHandler}
                 />
            <FontAwesomeIcon className={classes.SearchIcon} icon={faSearch} />
        </div>
    </div>);
}

export default FilterMeals;
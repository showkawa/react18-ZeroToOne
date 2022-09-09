import React, { useEffect, useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from './FilterMeals.module.css';

const FilterMeals = (props) => {

    const [keyword, setKeyword] = useState('');

    const inputChangeHandler = e => {
        setKeyword(e.target.value.trim());

    }

    // 搜索防抖
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('--- fliter ---')
            props.onFilter(keyword);
        }, 500);

        return () => {
            console.log('--- return filter ---')
            clearTimeout(timer);
        }
    }, [keyword])


    return (<div className={classes.FilterMeals}>
        <div className={classes.InputOuter}>
            <input
                value={keyword}
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
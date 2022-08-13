import { useState } from 'react';
import './Card.css';

const Card = (props) => {


    const [formData, setFormData] = useState(
        {
            date: '',
            desc: '',
            time: ''
        }
    );



    const dateOnChange = (event) => {
        //event.target 是触发事件的DOM对象
        setFormData({ ...formData, date: event.target.value });
    }

    const descOnchange = (event) => {
        setFormData({ ...formData, desc: event.target.value });
    }

    const timeOnChange = (event) => {
        setFormData({ ...formData, time: event.target.value });
    }

    const formSubmit = (event) => {
        event.preventDefault();

        props.onSaveLogForm(formData);

        setFormData({
            date: '',
            desc: '',
            time: ''
        })

    }



    return <>
        {/* <div className={`card ${props.className}`}>SSS</div> */}
        <form className={`form ${props.className}`} onSubmit={formSubmit}>
            <div>
                <label htmlFor="date">Date</label>
                <input id="date" type="date" onChange={dateOnChange} value={formData.date} />
            </div>
            <div>
                <label htmlFor="desc">Content</label>
                <input id="desc" type="text" onChange={descOnchange} value={formData.desc} />
            </div>
            <div>
                <label htmlFor="time">Time</label>
                <input id="time" type="text" onChange={timeOnChange} value={formData.time} />
            </div>
            <div>
                <button className="btn">Add item</button>
            </div>
        </form>
        
    </>;
}

export default Card;
import './Card.css';

const Card = (props) => {

    console.log(props.children);

    const addItem = () => {

    };

    const removeItem = () => {

    };

    return <>
        {/* <div className={`card ${props.className}`}>SSS</div> */}
        <form className={`form ${props.className}`}>
            <div>
                <label htmlFor="date">Date</label>
                <input id="date" type="date"></input>
            </div>
            <div>
                <label htmlFor="desc">Content</label>
                <input id="desc" type="text"></input>
            </div>
            <div>
                <label htmlFor="time">Time</label>
                <input id="time" type="text"></input>
            </div>
            <div>
            <button className="btn" onClick={addItem}>Add item</button>
            <button className="btn" onClick={removeItem}>Remove last item</button>
        </div>
        </form>
    </>;
}

export default Card;
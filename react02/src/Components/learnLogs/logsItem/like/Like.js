import React from 'react';
import './Like.css';


class Like extends React.Component {

    state ={
        kawa:132
    };

    comRef = React.createRef();


    cli = () => {
        console.log(this.comRef.current);
    }

    render() { 
        console.log(this.props); 
       
        return <div ref={this.comRef}>
            <div>Like-{this.state.kawa}</div>
            <button onClick={this.cli}>Print Log</button>
        </div>;
    }
}
 
export default Like;
import React from 'react';


class Com extends React.Component {

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
            <div>{this.props.desc}</div>
            <button onClick={this.cli}>Show</button>
        </div>;
    }
}
 
export default Com;
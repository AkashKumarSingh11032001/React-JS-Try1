import React from 'react';

class Item extends React.Component {
    clickMe() {
        alert("You clicked me!");
    }
    render() {
        return (
            <h1 onClick={()=>this.clickMe()}>Hello World this is {this.props.name}</h1>
        )
    }
}

export default Item;
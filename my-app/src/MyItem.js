import React from 'react';

class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            allowedClick: 100,
        }
    }


    clickMe() {
        // alert("You clicked me!");
        this.setState({ 
            clicks: this.state.clicks + 1,
            allowedClick: this.state.allowedClick-1,
        });
    }
    render() {
        return (
            <div>
            <h1 onClick={() => this.clickMe()}>Hello World this is {this.props.name}</h1>
            <span>{this.state.clicks} times clicked me and remaining {this.state.allowedClick}</span>
            </div>
        )
    }
}

export default Item;
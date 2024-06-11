import React, { Component } from 'react';

class Ciao extends Component {
    constructor() {
        super();
        this.state = {
            isHi: true,
            isSelect: false,
        };
    }
    render() {
        const { isHi } = this.state;
        console.log(this.props);
        const { name, age, isMale } = this.props;
        return (
            <article>
                <h2>{isHi ? 'Hi' : 'Bye'}, {name}! ({age})</h2>
                <p>gender:{isMale ? 'male' : 'female'}</p>
            </article>
        );
    }
}

export default Ciao;

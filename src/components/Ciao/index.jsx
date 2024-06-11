import React, { Component } from 'react';

class Ciao extends Component {
    render() {
        console.log(this.props);
        const { name, age, isMale } = this.props;
        return (
            <article>
                <h2>Hi, {name}! ({age})</h2>
                <p>gender:{isMale ? 'male' : 'female'}</p>
            </article>
        );
    }
}

export default Ciao;

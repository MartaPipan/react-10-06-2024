import React, { Component } from "react";

class Ciao extends Component {
  constructor() {
    super();
    this.state = {
      isHi: true,
    };
  }
  handlerClickInButton = () => {
    const { isHi } = this.state;
    this.setState({ isHi: !isHi });
  };
    
  render() {
    const { isHi } = this.state;
    console.log(this.props);
    const {
      user: { name,surname, age, isMale, isSelected, id },
      userSelected,
    } = this.props;
    const colorBG = isSelected ? "aqua" : "#eee";
    return (
      <article
        onClick={() => {
          userSelected(id);
        }}
        style={{ backgroundColor: colorBG }}
      >
        <h2>
          {isHi ? "Hi" : "Bye"}, {name} {surname}! ({age})
        </h2>
        <button onClick={this.handlerClickInButton}>switch</button>
        <p>gender:{isMale ? "male" : "female"}</p>
      </article>
    );
  }
}

export default Ciao;

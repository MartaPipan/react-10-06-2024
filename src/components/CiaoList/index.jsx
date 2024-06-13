import React, { Component } from "react";
import Ciao from "../Ciao";

class CiaoList extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          id: 6,
          name: "Fred",
          age: 45,
          isMale: true,
        },
        {
          id: 2,
          name: "Bred",
          age: 51,
          isMale: true,
        },
        {
          id: 23,
          name: "Anna",
          age: 24,
          isMale: false,
        },
      ],
    };
  }
  sortUsersByAge = () => {
    const { users } = this.state; //users - variable
    //створити копію масива і вже новий масив встановити в стан!!!
    //мутувати стан заборонено!!!
    //1 спосіб - поверхнева копія за допомогою спред оператора
    //const usersCopy = [...users];
    //usersCopy.sort((userA, userB) => userA.age - userB.age);
    //2 спосіб - поверхнева копія за допомогою toSorted
    //const usersCopy = users.toSorted((userA, userB) => userA.age - userB.age);
    //3 спосіб - глибока копія за допомогою JSON
    const usersCopy = JSON.parse(JSON.stringify(users));
    usersCopy.sort((userA, userB) => userA.age - userB.age);
    this.setState({ users: usersCopy });
  };
  mapUsers = ({ id, name, age, isMale }, index) => (
    <Ciao key={index} name={name} age={age} isMale={isMale} />
  );
  render() {
    const { users } = this.state;
    return (
      <>
        <button onClick={this.sortUsersByAge}>sort by age</button>
        <section>{users.map(this.mapUsers)}</section>;
      </>
    );
  }
}

export default CiaoList;

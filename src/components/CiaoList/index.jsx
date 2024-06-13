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
      isUpSort: true,
    };
  }
  sortUsersByAge = () => {
    const { users, isUpSort} = this.state; //users - variable
    const usersCopy = JSON.parse(JSON.stringify(users));
    usersCopy.sort((userA, userB) => isUpSort?userA.age - userB.age:userB.age-userA.age);
    this.setState({ users: usersCopy, isUpSort:!isUpSort });
  };
  mapUsers = ({ id, name, age, isMale },i) => (
    <Ciao key={id} name={name} age={age} isMale={isMale} />
  );
  render() {
    const { users,isUpSort} = this.state;
    return (
      <>
        <button onClick={this.sortUsersByAge}>sort{isUpSort?'Up':'Down'} by age</button>
        <section>{users.map(this.mapUsers)}</section>;
      </>
    );
  }
}

export default CiaoList;

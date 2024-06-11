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
  mapUsers = ({ id, name, age, isMale }) => (
    <li key={id}>
      <Ciao name={name} age={age} isMale={isMale} />
    </li>
  );
  render() {
    const { users } = this.state;
    return <ul>{users.map(this.mapUsers)}</ul>;
  }
}

export default CiaoList;

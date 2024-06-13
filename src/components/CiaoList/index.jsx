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
      isUpSortByAge: true,
      isUpSortByName: true,
      
    };
  }
  sortUsersByName = () => {
    const { users, isUpSortByName } = this.state;
    this.setState({
      users: users.toSorted((userA, userB) => {
        const userNameA = userA.name.toUpperCase(); // ignore upper and lowercase
        const userNameB = userB.name.toUpperCase(); // ignore upper and lowercase
        if (userNameA < userNameB) {
          return isUpSortByName?-1:1;
        }
        if (userNameA > userNameB) {
          return isUpSortByName ? 1:-1;
        }
        // names must be equal
        return 0;
      }),
      isUpSortByName:!isUpSortByName,
    })
  }
  sortUsersByAge = () => {
    const { users, isUpSortByAge} = this.state; //users - variable
    // поверхнева копія використовується для об'єктів першого порядку
    // об'єкти першого порядку - це такі об'єкти значеннями властивостей яких є примітиви
    this.setState({
      users: users.toSorted((userA, userB) =>
        isUpSortByAge ? userA.age - userB.age : userB.age - userA.age
      ),
      isUpSortByAge: !isUpSortByAge,
    });
  };
  mapUsers = ({ id, name, age, isMale },i) => (
    <Ciao key={id} name={name} age={age} isMale={isMale} />
  );
  render() {
    const { users,isUpSortByAge,isUpSortByName} = this.state;
    return (
      <>
        <button onClick={this.sortUsersByName}>sort{isUpSortByName?'Up':'Down'} by name</button>
        <button onClick={this.sortUsersByAge}>sort{isUpSortByAge?'Up':'Down'} by age</button>
        <section>{users.map(this.mapUsers)}</section>;
      </>
    );
  }
}

export default CiaoList;

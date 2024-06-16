import React, { Component } from "react";
import Ciao from "../Ciao";

const USERS_FROM_DB = [
  {
    id: 6,
    name: "Fred",
    surname: "Gray",
    age: 45,
    isMale: true,
  },
  {
    id: 2,
    name: "Bred",
    surname: "Pit",
    age: 51,
    isMale: true,
  },
  {
    id: 23,
    name: "Anna",
    surname: "Fer",
    age: 24,
    isMale: false,
  },
];

class CiaoList extends Component {
  constructor() {
    super();
    this.state = {
      users: USERS_FROM_DB.map((user) => ({ ...user, isSelected: false })),
      isUpSortByAge: true,
      isUpSortByName: true,
      isUpSortBySurname: true,
    };
  }

  sortUsersByName = () => {
    const { users, isUpSortByName } = this.state;
    this.setState({
      users: users.toSorted((userA, userB) => {
        //sort like toSorted exemple in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        const userNameA = userA.name.toUpperCase(); // ignore upper and lowercase
        const userNameB = userB.name.toUpperCase(); // ignore upper and lowercase
        if (userNameA < userNameB) {
          return isUpSortByName ? -1 : 1;
        }
        if (userNameA > userNameB) {
          return isUpSortByName ? 1 : -1;
        }
        // names must be equal
        return 0;
      }),
      isUpSortByName: !isUpSortByName,
    });
  };
  sortUsersBySurname = () => {
    const { users, isUpSortBySurname } = this.state;
    this.setState({
      users: users.toSorted((userA, userB) => {
        const userSurnameA = userA.surname.toUpperCase(); // ignore upper and lowercase
        const userSurnameB = userB.surname.toUpperCase(); // ignore upper and lowercase
        if (userSurnameA < userSurnameB) {
          return isUpSortBySurname ? -1 : 1;
        }
        if (userSurnameA > userSurnameB) {
          return isUpSortBySurname ? 1 : -1;
        }
        return 0;
      }),
      isUpSortBySurname: !isUpSortBySurname,
    });
  };
  sortUsersByAge = () => {
    const { users, isUpSortByAge } = this.state; //users - variable
    // поверхнева копія використовується для об'єктів першого порядку
    // об'єкти першого порядку - це такі об'єкти значеннями властивостей яких є примітиви
    this.setState({
      users: users.toSorted((userA, userB) =>
        isUpSortByAge ? userA.age - userB.age : userB.age - userA.age
      ),
      isUpSortByAge: !isUpSortByAge,
    });
  };
//батьківський елемент описує механізм через який дочірній елемент зможе змінити стан батьківського
  userSelected = (id) => {
    const { users } = this.state;
    this.setState({
      users: users.map((user) => ({
        ...user,
        isSelected: user.id === id ? !user.isSelected : user.isSelected,
      })),
    });
  };

  //mapUsers = ({ id, name, surname, age, isMale, isSelected }, i) => (
  //  <Ciao
  //    key={id}
  //    name={name}
  //    surname={surname}
  //    age={age}
  //    isMale={isMale}
  //    isSelected={isSelected}
  //    id={id}
  //    userSelected={this.userSelected}
  //  />
  //);
  mapUsers = (user) => (
    <Ciao
      key={user.id}
      user={user}
      userSelected={this.userSelected}
    />
  );
  render() {
    const { users, isUpSortByAge, isUpSortByName, isUpSortBySurname } =
      this.state;
    return (
      <>
        <section>{users.map(this.mapUsers)}</section>;
      </>
    );
  }
}

export default CiaoList;

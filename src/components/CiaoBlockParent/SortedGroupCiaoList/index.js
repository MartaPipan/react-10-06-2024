import React, { Component } from 'react';

class SortedGroupCiaoList extends Component {
    render() {
        return (
            <div>
                SortedGroupCiaoList
              <button onClick={this.sortUsersByName}>
          sort{isUpSortByName ? "Up" : "Down"} by name
        </button>
        <button onClick={this.sortUsersBySurname}>
          sort{isUpSortBySurname ? "Up" : "Down"} by surname
        </button>
        <button onClick={this.sortUsersByAge}>
          sort{isUpSortByAge ? "Up" : "Down"} by age
        </button>  
            </div>
        );
    }
}

export default SortedGroupCiaoList;

import React, { Component } from 'react';
import SelectedCiaoList from './index';

class SelectedCiaoList extends Component {
    render() {
        const { users } = this.props;
        const selectedUsers = users.filter((user)=>user.isSelect)
        return (
            <ul>
                {selectedUsers.map((user) => (
                    <li key={user.id}>user.name</li>
                ))}
            </ul> 
        );
    }
}

export default SelectedCiaoList;

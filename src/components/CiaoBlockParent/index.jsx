import React, { Component } from 'react';
import Ciao from './Ciao';
import CiaoList from './CiaoList';
import SelectedCiaoList from './Selected CiaoList';
import SortedGroupCiaoList from './SortedGroupCiaoList';

class CiaoBlockParent extends Component {
    render() {
        return (
            <>
                <Ciao/>
                <CiaoList />
                <hr />
                <SelectedCiaoList />
                <SortedGroupCiaoList/>
            </>
        );
    }
}

export default CiaoBlockParent;

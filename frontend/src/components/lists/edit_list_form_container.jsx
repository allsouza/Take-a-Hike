import React from 'react';
import { connect } from 'react-redux';
import { fetchList, updateList } from '../../actions/list_actions';
import ListForm from './list_form';

const mSTP = (state, ownProps) => {
    return {
        list: state.lists[ownProps.match.params.listId],
        formType: 'Update List'
    }
};

const mDTP = dispatch => {
    return {
        fetchList: (listId) => dispatch(fetchList(listId)),
        updateList: (list) => dispatch(update(list)) 
    }
}

export default connect(mSTP, mDTP)(ListForm)

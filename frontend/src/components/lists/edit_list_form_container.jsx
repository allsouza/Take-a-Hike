import React from 'react';
import { connect } from 'react-redux';
import { fetchList, updateList } from '../../actions/list_actions';
import ListForm from './list_form';

const mSTP = (state, ownProps) => {
    return {
        list: ownProps.info.data,
        readOnly: ownProps.info.readOnly,
        formType: ownProps.info.readOnly ? 'View List' : 'Update List'
    }
};

const mDTP = dispatch => {
    return {
        fetchList: (listId) => dispatch(fetchList(listId)),
        action: (list) => dispatch(updateList(list)) 
    }
}

export default connect(mSTP, mDTP)(ListForm)

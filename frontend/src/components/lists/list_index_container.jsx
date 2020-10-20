import { connect } from 'react-redux';
import ListIndex from './list_index';
import { fetchLists, deleteList, createList } from '../../actions/list_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = state => {
    const userId = state.session.user ? state.session.user.id : ""
    return {
        lists: Object.values(state.entities.lists),
        currentUser: userId
    }
};

const mDTP = dispatch => {
    return {
        fetchLists: () => dispatch(fetchLists()),
        deleteList: listId => dispatch(deleteList(listId)),
        editList: (data, readOnly) => dispatch(openModal('list', {data: data, readOnly: readOnly})),
    }
};

export default connect(mSTP, mDTP)(ListIndex);
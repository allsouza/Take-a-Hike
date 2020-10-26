import { connect } from 'react-redux';
import ListIndex from './list_index';
import { fetchLists, deleteList, createList } from '../../actions/list_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = state => {
    const userId = state.session.user ? state.session.user.id : "";
    const lists = state.entities.users[userId] ? Object.values(state.entities.lists).filter(list => list.author === userId || state.entities.users[userId].following.includes(list.author)) : [];
    
    return {
        lists: lists,
        currentUser: userId,
        allUsers: state.entities.users
    }
};

const mDTP = dispatch => {
    return {
        fetchLists: () => dispatch(fetchLists()),
        deleteList: listId => dispatch(deleteList(listId)),
        editList: (data, readOnly) => dispatch(openModal('list', {data: data, readOnly: readOnly})),
        openModal: (modal) => dispatch(openModal(modal))
    }
};

export default connect(mSTP, mDTP)(ListIndex);
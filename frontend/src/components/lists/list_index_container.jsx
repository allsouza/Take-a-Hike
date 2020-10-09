import { connect } from 'react-redux';
import ListIndex from './list_index';
import { fetchLists, deleteList, createList } from '../../actions/list_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = state => {
    return {
        lists: Object.values(state.entities.lists)
    }
};

const mDTP = dispatch => {
    return {
        fetchLists: () => dispatch(fetchLists()),
        deleteList: listId => dispatch(deleteList(listId)),
        editList: (data) => dispatch(openModal('list', data)),
        openModal: (type, data) => dispatch(openModal(type, data))
    }
};

export default connect(mSTP, mDTP)(ListIndex);
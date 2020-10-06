import { connect } from 'react-redux';
import ListIndex from './list_index';
import { fetchLists, deleteList } from '../../actions/list_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = state => ({
    lists: Object.values(state.entities.lists)
});

const mDTP = dispatch => ({
    fetchLists: () => dispatch(fetchLists()),
    deleteList: listId => dispatch(deleteList(listId)),
    editList: (data) => dispatch(openModal('list', data))
});

export default connect(mSTP, mDTP)(ListIndex);
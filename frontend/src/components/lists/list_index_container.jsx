import { connect } from 'react-redux';
import ListIndex from './list_index';
import { fetchLists, deleteList } from '../../actions/list_actions';


const mSTP = state => ({
    lists: Object.values(state.lists)
});

const mDTP = dispatch => ({
    fetchLists: () => dispatch(fetchLists()),
    deleteList: listId => dispatch(deleteList(listId))
});

export default connect(mSTP, mDTP)(ListIndex);
import { connect } from 'react-redux';
import ListIndex from './list_index';
import { fetchLists, deleteList } from '../../actions/list_actions';


const mSTP = state => ({
    posts: Object.values(state.posts)
});

const mDTP = dispatch => ({
    fetchLists: () => dispatch(fetchLists()),
    deleteList: listId => dispatch(deleteList(listId))
});

export default connect(mSTP, mDTP)(ListIndex);
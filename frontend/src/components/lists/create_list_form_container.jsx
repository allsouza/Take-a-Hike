import { connect } from 'react-redux';
import { createList } from '../../actions/list_actions';
import ListForm from './list_form';

//not sure what lists will look like coming from the backend??

const mSTP = state => {
    return {
        list: {
            body: '',
            title: '',
            author: state.session.user.id
        },
        formType: 'Create List'
    }
};

const mDTP = dispatch => {
    return {
        action: list => dispatch(createList(list))
    }
};

export default connect(mSTP, mDTP)(ListForm);
import * as ListApiUtil from '../util/list_api_util';

export const RECEIVE_ALL_LISTS = 'RECEIVE_ALL_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';

const receiveAllLists = lists => ({
    type: RECEIVE_ALL_LISTS,
    lists
});

const receiveList = list => ({
    type: RECEIVE_LIST,
    list
});

const removeList = listId => ({
    type: REMOVE_LIST,
    listId
});

export const fetchLists = () => dispatch => (
    ListApiUtil.fetchLists()
        .then(lists => dispatch(receiveAllLists(lists.data)))
);  

export const fetchList = listId => dispatch => (
    ListApiUtil.fetchList(listId)
        .then(list => dispatch(receiveList(list)))
);

export const createList = list => dispatch => (
    ListApiUtil.createList(list)
        .then(list => dispatch(receiveList(list)))
);

export const updateList = list => dispatch => {
    debugger
    return ListApiUtil.updateList(list)
        .then(list => dispatch(receiveList(list)))
};

export const deleteList = listId => dispatch => (
    ListApiUtil.deleteList(listId)
        .then(() => dispatch(removeList(listId)))
);
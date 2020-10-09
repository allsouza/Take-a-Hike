const { UPDATE_FILTER } = require("../actions/filter_actions")

const initialState = {
    bounds: {},
};

const filterReducer = (state = initialState, action)=>{
    Object.freeze(state)
    switch (action.type) {
        case UPDATE_FILTER:
            const newState = Object.assign({}, state);
            newState[action.filter]= action.value;
            return newState;
        default:
            return state;
    }
}

export default filterReducer;
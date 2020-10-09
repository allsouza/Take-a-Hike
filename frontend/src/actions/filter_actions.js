import { fetchTrails } from "./trails_actions";

export const UPDATE_FILTER = "UPDATE_FILTER";

export const updateFilterAction = (filter, value) =>{
    return({
        type: UPDATE_FILTER,
        filter,
        value
    })
}

export const updateFilter = (filter, value) => (dispatch, getState) => {
    dispatch(updateFilterAction(filter, value));
    return (fetchTrails(getState().ui.filters))(dispatch);
}
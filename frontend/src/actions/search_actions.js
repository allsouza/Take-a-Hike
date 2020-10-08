import * as MapApiUtil from '../util/map_api_util';
import { fetchTrails } from './trails_actions';

export const RECEIVE_API_TRAILS = "RECEIVE_API_TRAILS";

const receiveApiTrails = () => {
    return{
        type: RECEIVE_API_TRAILS, 
    };
};

export const fetchApiTrails = params => dispatch => {
    MapApiUtil.fetchApiTrails(params).then(() => dispatch(receiveApiTrails()));
};
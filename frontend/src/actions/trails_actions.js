import * as TrailApiUtil from '../util/trails_api_util';

export const RECEIVE_ALL_TRAILS = 'RECEIVE_ALL_TRAILS';
export const RECEIVE_TRAIL = 'RECEIVE_TRAIL';

const receiveAllTrails = trails => {
    return {
        type: RECEIVE_ALL_TRAILS,
        trails
    }
}

const receiveTrail = trail => {
    return {
        type: RECEIVE_TRAIL,
        trail
    }
}

export const fetchTrails = () => dispatch => {
    return TrailApiUtil.fetchTrails()
        .then(trails => dispatch(receiveAllTrails(trails.data)))
};

export const fetchTrail = trailId => dispatch => {
    return TrailApiUtil.fetchTrail(trailId)
        .then(trail => dispatch(receiveTrail(trail)))
};

export const createTrail = trail => dispatch => {
    return TrailApiUtil.createTrail(trail)
        .then(trail => dispatch(receiveTrail(trail)))
}

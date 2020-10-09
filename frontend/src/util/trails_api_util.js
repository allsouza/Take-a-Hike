import axios from 'axios';

//not sure if we need a '/' in the axios GET request

export const fetchTrails = () => {
    return axios.get('/api/trails');
};

export const fetchTrail = (trailId) => {
    return axios.get(`api/trails/${trailId}`);
};

export const createTrail = data => {
    return axios.post('api/trails/', data);
}
import axios from 'axios';

export const fetchTrails = () => {
    return axios.get('/api/lists')
};
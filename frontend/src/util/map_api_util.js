import axios from 'axios';


export const fetchApiTrails = async function(params){
    const result = await axios.post('/api/hiking_project_api/', params);
    return result;
};
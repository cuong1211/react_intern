import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'https://intern_project.minhhoangjsc.io/api';
});

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};
export const post = async (path, options = {}) => {
    const response = await httpRequest.post(path, options);
    return response.data;
};
export const delete = async (path, options = {}) => {
    const response = await httpRequest.delete(path, options);
    return response.data;
};

export default httpRequest;

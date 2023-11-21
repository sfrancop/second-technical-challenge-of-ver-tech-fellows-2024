import axios from 'axios';

export const getQueries = () => {
    return axios.get('http://localhost:8000/queries/api/v1/queries/');
}

export const postQuery = (Query) => {
    return axios.post('http://localhost:8000/queries/api/v1/queries/', Query);
}

export const getResult = () => {
    return axios.get('http://localhost:8000/');
}
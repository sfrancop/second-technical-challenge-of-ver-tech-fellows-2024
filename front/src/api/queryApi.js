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

export const putQuery = (id, query) => {
    return axios.put('http://localhost:8000/queries/api/v1/queries/' + id, query);
}


export const getQuery = (id) => {
    return axios.get('http://localhost:8000/queries/api/v1/queries/'+id);
}
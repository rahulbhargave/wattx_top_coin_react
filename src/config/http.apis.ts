import http from './http.common';
import { Filter } from '../types/filters';

const get = (filters:Filter) => {
    const {type,limit} = filters;
    return http.get(`/listings/${type}?start=1&limit=${limit}`);
};

const httpApis = {
    get
};

export default httpApis;
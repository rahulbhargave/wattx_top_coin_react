import http from './http.common';

const get = () => {
    return http.get(`/listings/latest`);
};

const httpApis = {
    get
};

export default httpApis;
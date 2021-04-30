import Client from './Clients/AxiosClient';
const resource = '/posts/1';

export default {
    get(){
        return Client.get(`${resource}`)
    }
}
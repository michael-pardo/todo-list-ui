import Client from './Clients/AxiosClient';
const resource = '/api/tasks/count';
const resourceUsers = '/api/users/count';

export default {
    getTodosCount(){
        return Client.get(`${resource}`)
    },
    getUsersCount(){
        return Client.get(`${resourceUsers}`)
    }
}
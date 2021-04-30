import Client from './Clients/AxiosClient';
const resource = '/posts';

export default {
    get(){
        return Client.get(`${resource}`)
    },
    edit(todo){
        return Client.post(`${resource}/${todo.id}`,todo)
    },
    add(todo){
        return Client.post(`${resource}`,todo)
    }
}
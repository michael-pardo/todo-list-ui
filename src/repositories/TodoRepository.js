import Client from './Clients/AxiosClientToken';
const resource = '/api/tasks/';

export default {
    get(){
        return Client.get(`${resource}`)
    },
    edit(todo){
        return Client.put(`${resource}/${todo.id}/`,todo)
    },
    delete(id){
        return Client.post(`${resource}/${id}`)
    },
    add(todo){
        return Client.post(`${resource}`,todo)
    }
}
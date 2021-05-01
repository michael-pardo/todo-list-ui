import Client from './Clients/AxiosClientToken';
const resource = '/api/tasks/';

export default {
    get(){
        return Client.get(`${resource}`)
    },
    getTodo(id){
        return Client.get(`${resource}${id}`)
    },
    edit(todo){
        return Client.put(`${resource}${todo.id}/`,todo)
    },
    delete(id){
        return Client.delete(`${resource}/${id}`)
    },
    add(task, description){
        const payload =  {
            name: task,
            description: description,
            status:'pendiente'
        }
        return Client.post(`${resource}`,payload)
    }
}
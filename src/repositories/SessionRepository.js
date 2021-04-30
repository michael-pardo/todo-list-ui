import Client from './Clients/AxiosClient';
const resource = '/login';

export default {
    login(email, password){
        const payload =  {
            email: email,
            password: password
        }
        return Client.post(`${resource}`,payload)
    },

    close(){
        localStorage.removeItem("token")
        return true
    }
}
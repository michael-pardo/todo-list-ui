import Client from './Clients/AxiosClient';
const resource = '/login';
const resourceRegister = '/register';

export default {
    login(email, password){
        const payload =  {
            grant_type: 'password',
            username: email,
            password: password,
            client_id: '1Mju5tT35+1nG'
        }
        return Client.post(`${resource}`,payload)
    },

    register(email, password){
        const payload =  {
            email: email,
            password: password
        }
        return Client.post(`${resourceRegister}`,payload)
    },

    close(){
        localStorage.removeItem("token")
        return true
    }
}
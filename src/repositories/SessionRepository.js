import Client from './Clients/AxiosClient';
const resource = '/o/token/';
const resourceRegister = '/register';

export default {
    login(email, password){
        // const payload =  {
        //     grant_type: 'password',
        //     username: email,
        //     password: password,
        //     client_id: '1Mju5tT35+1nG'
        // }
        const params = new URLSearchParams()
        params.append('grant_type', 'password')
        params.append('username', email)
        params.append('password', password)
        params.append('client_id', '1Mju5tT35+1nG')

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        return Client.post(`${resource}`,params, config)
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
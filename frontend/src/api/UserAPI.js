import axios from 'axios';

const UserAPI = {
    getCsrfToken: () => { },
    logIn: async (email, password) => {
        const response = await axios.post('http://localhost:9000/api/accounts/login/', { username: email, password });
        return response.data;
    },
    logOut: () => { },
    confirmEmail: () => { },
}

export default UserAPI;
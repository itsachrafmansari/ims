import axios from "axios";

const InternAPI = {
    signUp: async (firstName, lastName, email, password) => {
        const response = await axios.post('http://localhost:9000/api/intern/signup/', {
            first_name: firstName,
            last_name: lastName,
            email,
            password
        });
        return response;
    },
    getPersonalInformation: async (token) => {
        const response = await axios.get('http://localhost:9000/api/intern/personal-info/', {
            headers: {
                'Authorization': `Token ${token}`
            }
        });
        return response;
    },
    submitPersonalInformation: async (token, data) => {
        const response = await axios.post('http://localhost:9000/api/intern/personal-info/', data, {
            headers: {
                'Authorization': `Token ${token}`
            }
        });
        return response;
    },
    submitDocuments: () => { },
    fetchCertificateData: () => { }
}

export default InternAPI;
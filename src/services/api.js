import axios from 'axios'; 

export const key = '7efb6a67589d94fb01b29afb923cdfd9ac439ef1';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers:{
        'Authorization': `Bearer ${key}`
    } 
})

export default api;
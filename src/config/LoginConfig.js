import axios from 'axios';
import { baseURL } from './config';

export const Login = async (email, password) => {
    let response;
    try {
        response = await axios.post(
            `${baseURL}/login`,
            {
                email: email,
                password: password
            }
        );
        
        return response;

    } catch (error) {
        console.log('Error in login function (LoginConfig.js) :', error);
        alert('Email or password incorrect');
    }
}
import axios from 'axios';
import { baseURL } from './config';

export const Register = async (firstName, lastName, email, phone, city, password) => {
    try {
        const response = await axios.post(
            `${baseURL}/register`,
            {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                city: city,
                password: password
            }
        )
        
        return response;

    } catch (error) {
        console.log('Error in SignUp function (signUpConfig.js) :', error);
    }
}
import axios from 'axios';
import { baseURL } from './config';

export const SendFormData = async () => {
    try {
        const response = await axios.post(
            `${baseURL}`,
            {

            }
        )
    } catch (error) {
        console.log('Error sending form data (formConfig.js) :', error);
    }
}
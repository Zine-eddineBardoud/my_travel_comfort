export const baseURL = 'http://localhost:3001';

export const LoadRoleAndToken = async () => {
    try {
        const role = localStorage.getItem('role');
        const token = localStorage.getItem('token');
        return { role, token };
    } catch (error) {
        console.log('Error in loadRoleAndToken function :', error);
    }
};
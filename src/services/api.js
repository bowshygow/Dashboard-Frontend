// // frontend/src/services/api.js

const BASE_URL = 'http://localhost:5000/api'; // Replace with your backend server URL



async function api(url,method,body=null){
    try {
        console.log('body',body);
        const token = localStorage.getItem('authToken');
        let response = await fetch(`${BASE_URL}/${url}`,{
            method: method==='p'?'POST':'GET',
            headers: {
                "Content-Type": "application/json",
                'Authorization': token,
            },
            body: body ? JSON.stringify(body) : undefined,
        });
        return response;
    }
    catch (error) {
        console.error('Error making request:', error);
        throw error;
    }
}

export default api;
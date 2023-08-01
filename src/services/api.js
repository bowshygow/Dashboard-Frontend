// // frontend/src/services/api.js

// const BASE_URL = 'http://localhost:5000'; // Replace with your backend server URL

// // Function to make GET requests
// export const get = async (url) => {
//   try {
//     const response = await fetch(`${BASE_URL}/${url}`);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error making GET request:', error);
//     throw error;
//   }
// };

// // Function to make POST requests
// export const post = async (url, body) => {
//   try {
//     const response = await fetch(`${BASE_URL}/${url}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(body),
//     });
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error making POST request:', error);
//     throw error;
//   }
// };

// // Function to make PUT requests
// export const put = async (url, body) => {
//   try {
//     const response = await fetch(`${BASE_URL}/${url}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(body),
//     });
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error making PUT request:', error);
//     throw error;
//   }
// };

// // Function to make DELETE requests
// export const del = async (url) => {
//   try {
//     const response = await fetch(`${BASE_URL}/${url}`, {
//       method: 'DELETE',
//     });
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error making DELETE request:', error);
//     throw error;
//   }
// };

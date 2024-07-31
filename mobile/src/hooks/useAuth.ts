// // src/hooks/useAuth.js

// import { useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';

// // Giả sử bạn có một API xác thực tại '/api/auth'

// const useAuth = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadUser = async () => {
//       try {
//         const storedUser = await AsyncStorage.getItem('user');
//         if (storedUser) {
//           setUser(JSON.parse(storedUser));
//         }
//       } catch (error) {
//         console.error('Failed to load user:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadUser();
//   }, []);

//   const login = async (username, password) => {
//     setLoading(true);
//     try {
//       const response = await axios.post('/api/auth/login', { username, password });
//       const userData = response.data;
//       setUser(userData);
//       await AsyncStorage.setItem('user', JSON.stringify(userData));
//     } catch (error) {
//       console.error('Failed to login:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const logout = async () => {
//     setLoading(true);
//     try {
//       await axios.post('/api/auth/logout');
//       setUser(null);
//       await AsyncStorage.removeItem('user');
//     } catch (error) {
//       console.error('Failed to logout:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return {
//     user,
//     loading,
//     login,
//     logout,
//   };
// };

// export default useAuth;

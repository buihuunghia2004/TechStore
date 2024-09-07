import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginApi } from '~/services/authService'

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await loginApi(credentials);
      
      const token = response.data
      
      localStorage.setItem('token', token);

      return { token }; // Trả về token để cập nhật Redux store
    } catch (error) {
      return rejectWithValue(error.response.data.message || 'Login failed');
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      // Xóa token khỏi localStorage
      localStorage.removeItem('token');
    } catch (error) {
      return rejectWithValue(error.response.data.message || 'Logout failed');
    }
  }
);

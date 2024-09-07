import api from '~/api/api';

// Định nghĩa hàm đăng nhập
export const loginApi = async (credentials) => {
  try {
    const response = await api.post('api/auth/manager/login', credentials);
    return response; // Trả về response để lấy token
  } catch (error) {
    // Ném lỗi để `createAsyncThunk` có thể xử lý
    throw error;
  }
};

export const logoutApi = async () => {
  try {
    await api.post('/auth/logout');
  } catch (error) {
    throw error;
  }
};

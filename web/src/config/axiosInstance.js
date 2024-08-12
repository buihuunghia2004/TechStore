import axios from 'axios';

// Tạo instance của axios
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8017/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Hàm để lấy refreshToken từ storage hoặc state
const getRefreshToken = () => {
  // return localStorage.getItem('refreshToken');
  return ''
};

// Hàm để lưu accessToken vào storage hoặc state
const setAccessToken = (token) => {
  // localStorage.setItem('accessToken', token);
};

// Interceptor để xử lý các yêu cầu
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor để xử lý phản hồi lỗi
axiosInstance.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const { config, response } = error;
    
    // Kiểm tra lỗi 401
    // if (response.status === 401) {
    //   const originalRequest = config;
    //   const refreshToken = getRefreshToken();

    //   if (refreshToken) {
    //     try {
    //       // Gửi yêu cầu làm mới accessToken
    //       const { data } = await axios.post('https://api.example.com/refresh-token', { refreshToken });

    //       // Lưu accessToken mới vào storage
    //       setAccessToken(data.accessToken);

    //       // Cập nhật header của yêu cầu gốc với accessToken mới
    //       originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;

    //       // Thực hiện lại yêu cầu gốc với accessToken mới
    //       return axiosInstance(originalRequest);
    //     } catch (refreshError) {
    //       // Xử lý lỗi khi làm mới accessToken
    //       return Promise.reject(refreshError);
    //     }
    //   }
    // }

    return Promise.reject(error);
  }
);

export default axiosInstance;

import { env } from '@/config/environment';
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

// Cấu hình Cloudinary
cloudinary.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME, 
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_SECRET_KEY
});

// Cấu hình Multer-Storage-Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads', // Thư mục trên Cloudinary để lưu trữ file
    format: async (req, file) => 'png', // Lựa chọn định dạng file (tùy chọn)
    public_id: (req, file) => file.originalname, // Định danh công khai cho file (tùy chọn)
  },
});

// Khởi tạo Multer với Cloudinary storage
const upload = multer({ storage: storage });

export default upload;

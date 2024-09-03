import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

// Thiết lập bộ nhớ Multer để lưu file vào bộ nhớ tạm thời trước khi upload lên Cloudinary
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Thư mục để lưu file tạm thời
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Đặt tên file với timestamp để đảm bảo duy nhất
  },
});

// Khởi tạo Multer với cấu hình bộ nhớ
const upload = multer({ storage: storage });

export default upload;

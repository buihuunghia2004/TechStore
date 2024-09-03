import { Umzug, MongoDBStorage } from 'umzug';
import { connectToMongoDB } from './connect.js';

export async function setupUmzug() {
  const mongooseConnection = await connectToMongoDB();

  const umzug = new Umzug({
    migrations: {
      glob: './migrations/*.js', // Đường dẫn tới các file migration
    },
    context: mongooseConnection, // Truyền kết nối mongoose cho các file migration
    storage: new MongoDBStorage({
      collectionName: 'migrations', // Collection để lưu trữ lịch sử migration
      client: mongooseConnection.getClient(), // Client MongoDB từ Mongoose
    }),
    logger: console, // Tùy chọn: cấu hình logger
  });

  return umzug;
}

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import filesRouter from './routes/files.js';

// 初始化环境变量
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(cors());
app.use(express.json());

// 路由挂载
app.use('/api', filesRouter);

// 启动服务
app.listen(PORT, () => {
  console.log(`✅ server: http://localhost:${PORT}`);
});

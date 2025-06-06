import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import fileUpload from 'express-fileupload';
import fsRoute from './routes/fs.js';

const app = express();
const port = 2234;

app.use(express.json());
app.use(fileUpload());

// 文件系统接口
app.use('/api/fs', fsRoute);

app.listen(port, () => {
  console.log(`Crimson core running at http://localhost:${port}`);
});

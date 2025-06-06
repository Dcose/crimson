// backend/routes/files.js
import { Router } from 'express';
import fs from 'fs/promises';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();
const router = Router();

const ROOT_DIR = path.resolve(process.env.ROOT_DIR || './');

router.get('/list', async (req, res) => {
  const reqPath = req.query.path || '/';
  const targetPath = path.join(ROOT_DIR, reqPath);

  try {
    const items = await fs.readdir(targetPath, { withFileTypes: true });

    const result = items.map((item) => ({
      name: item.name,
      isDir: item.isDirectory()
    }));

    res.json({
      path: reqPath,
      list: result
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

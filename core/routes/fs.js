/*
 * @Author: Dcose 77829706+Dcose@users.noreply.github.com
 * @Date: 2025-06-06 17:56:57
 * @LastEditors: Dcose 77829706+Dcose@users.noreply.github.com
 * @LastEditTime: 2025-06-06 17:57:02
 * @FilePath: \crimson\core\routes\fs.js
 * @Description:
 *
 * Copyright (c) 2025 by Dcose, All Rights Reserved.
 */
// core/routes/fs.js
import express from 'express';
import { listPath } from '../onedrive/api.js';

const router = express.Router();

router.post('/list', async (req, res) => {
  const { path = '/', page = 1, per_page = 100 } = req.body;

  try {
    const files = await listPath(path);
    const content = files.map((item) => ({
      name: item.name,
      type: item.folder ? 'folder' : 'file',
      size: item.size,
      updated_at: item.lastModifiedDateTime
    }));

    res.json({ content });
  } catch (err) {
    console.error('❌ 列表获取失败:', err.response?.data || err.message);
    res.status(500).json({ error: '获取文件列表失败' });
  }
});

export default router;

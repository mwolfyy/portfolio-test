import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'public', 'messages.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const newMessage = {
      ...req.body,
      created_at: new Date().toISOString(),
    };

    let messages = [];

    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      messages = JSON.parse(data);
    }

    messages.push(newMessage);
    fs.writeFileSync(filePath, JSON.stringify(messages, null, 2), 'utf8');

    return res.status(200).json({ success: true });
  }

  if (req.method === 'GET') {
    if (!fs.existsSync(filePath)) {
      return res.status(200).json([]);
    }

    const data = fs.readFileSync(filePath, 'utf8');
    return res.status(200).json(JSON.parse(data));
  }

  return res.status(405).end(); // Method Not Allowed
}
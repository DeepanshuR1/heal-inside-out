// import { NextApiRequest, NextApiResponse } from 'next';
// import { MongoClient } from 'mongodb';
 
// const uri = process.env.MONGODB_URI as string;
// let client: MongoClient | null = null;
 
// const getClient = async () => {
//   if (!client) {
//     client = new MongoClient(uri);
//     await client.connect();
//   }
//   return client;
// };
 
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     try {
//       const { name, email, message } = req.body;
//       const client = await getClient();
//       const database = client.db('yoga');
//       const collection = database.collection('submissions');
//       const result = await collection.insertOne({ name, email, message, createdAt: new Date() });
 
//       res.status(200).json({ message: 'Form submitted successfully', result });
//     } catch (error) {
//       res.status(500).json({ error: 'Error submitting form', details: error });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
 
const uri = process.env.MONGODB_URI as string;
let client: MongoClient | null = null;
 
const getClient = async () => {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
    console.log('Connected to MongoDB');
  }
  return client;
};
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('API Route Hit:', req.method);
 
  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;
      const client = await getClient();
      const database = client.db('yoga');
      const collection = database.collection('submissions');
      const result = await collection.insertOne({ name, email, message, createdAt: new Date() });
 
      res.status(200).json({ message: 'Form submitted successfully', result });
    } catch (error) {
      console.error('Error submitting form:', error);
      res.status(500).json({ error: 'Error submitting form', details: error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
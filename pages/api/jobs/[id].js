import DB, { jobs } from '@/database/connection';
const { ObjectId } = require('mongodb');

export default async function jobIdHandler(req, res) {
   const { id } = req.query;
   const userId = req.query.userId;

   try {
     await DB.connect().catch((error) => res.json({ error: 'DB Connection Failed...!' }));
     if (!jobId || !userId) return res.status(404).json({ error: "Don't have the ID...!" });

     if (userId) {
       const getJob = await jobs.find({ userId: userId }).toArray();
       res.status(200).json(getJob);      
     }

      const getJob = await jobs.find({ _id: new ObjectId(id) }).toArray();
      res.status(200).json(getJob);
     
   } catch (error) {
     res.status(500).json({ error: 'Connection Failed...!' });
   }
 }
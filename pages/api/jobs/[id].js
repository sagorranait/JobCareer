import DB, { jobs } from '@/database/connection';
const { ObjectId } = require('mongodb');

export default async function jobIdHandler(req, res) {
   const jobId = new ObjectId(req.query.id);

   try {
     await DB.connect().catch((error) => res.json({ error: 'DB Connection Failed...!' }));
     if (!jobId) return res.status(404).json({ error: "Don't have the ID...!" });

     const getJob = await jobs.find({ _id: jobId }).toArray();
     res.status(200).json(getJob);
   } catch (error) {
     res.status(500).json({ error: 'Connection Failed...!' });
   }
 }
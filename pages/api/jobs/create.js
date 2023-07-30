import DB, { jobs } from '@/database/connection';

export default async function createJobHandler(req, res) {
   const data = req.body;

   try {
    await DB.connect().catch((error) => res.json({ error: 'DB Connection Failed...!' }));   

    const getProposals = await jobs.insertOne(data);
    res.status(200).json(getProposals);
   } catch (error) {
     res.status(500).json({ error: 'Connection Failed...!' });
   }
 }
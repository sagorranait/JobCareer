import DB, { jobs } from '@/database/connection';

export default async function proposalsHandler(req, res) {
   try {
     await DB.connect().catch((error) => res.json({ error: 'DB Connection Failed...!' }));
     const sort = { date: -1 };

     const proposal = await jobs.find({}).sort(sort).toArray();
     res.status(200).json(proposal);
   } catch (error) {
     res.status(500).json({ error: 'Connection Failed...!' });
   }
 }
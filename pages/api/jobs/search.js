import DB, { jobs } from '@/database/connection';

export default async function jobSearchHandler(req, res) {
  const { skill } = req.query;

   try {
     await DB.connect().catch((error) => res.json({ error: 'DB Connection Failed...!' }));
     if (!skill) return res.status(404).json({ error: "Don't have the Skill...!" });

     const searchResult = await jobs.find({
       skills: { $in: [skill] },
     }).toArray();

     res.status(200).json(searchResult);     
   } catch (error) {
     res.status(500).json({ error: 'Connection Failed...!' });
   }
 }
import DB, { proposals } from '@/database/connection';

export default async function userEmailHandler(req, res) {
   const { id } = req.query;

   try {
     await DB.connect().catch((error) => res.json({ error: 'Connection Failed...!' }));
     if (!id) return res.status(404).json({ error: "Don't have the ID...!" });

     const getProposals = await proposals.find({ userId: id }).toArray();
     res.status(200).json(getProposals);
   } catch (error) {
     res.status(500).json({ error: 'Connection Failed...!' });
   }
 }
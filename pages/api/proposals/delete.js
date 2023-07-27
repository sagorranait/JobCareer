import DB, { proposals } from '@/database/connection';
import { ObjectId } from 'mongodb';

export default async function proposalDeleteHandler(req, res) {
   const { id } = req.query;

   try {
     await DB.connect().catch((error) => res.json({ error: 'Connection Failed...!' }));
     if (!id) return res.status(404).json({ error: "Don't have the ID...!" });

     const query = { _id: new ObjectId(id) };

     const getProposals = await proposals.deleteOne(query);
     res.status(200).json(getProposals);
   } catch (error) {
     res.status(500).json({ error: 'Connection Failed...!' });
   }
 }
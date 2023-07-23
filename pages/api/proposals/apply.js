import DB, { proposals } from '@/database/connection';

export default async function proposalHandler(req, res) {
   const data = req.body;

   try {
    await DB.connect().catch((error) => res.json({ error: 'DB Connection Failed...!' }));   

    const getProposals = await proposals.insertOne(data);
    res.status(200).json(getProposals);
   } catch (error) {
     res.status(500).json({ error: 'Connection Failed...!' });
   }
 }
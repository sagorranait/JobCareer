import DB, { proposals } from '@/database/connection';

export default async function proposalHandler(req, res) {
    const id = req.query?.jobId;

   try {
    await DB.connect().catch((error) => res.json({ error: 'Connection Failed...!' }));
    if (id) {
        if (!id) return res.status(404).json({ error: "Don't have the Job ID...!" });

        const getProposals = await proposals.find({ jobId: id }).toArray();
        res.status(200).json(getProposals);
    }else{
        const getProposals = await proposals.find().toArray();
        res.status(200).json(getProposals);
    }
   } catch (error) {
     res.status(500).json({ error: 'Connection Failed...!' });
   }
 }
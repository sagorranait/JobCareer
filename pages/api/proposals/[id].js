import DB, { proposals } from '@/database/connection';
import { ObjectId } from 'mongodb';

export default async function proposalIdHandler(req, res) {
   const { id, jobId } = req.query;

   try {
     await DB.connect().catch((error) => res.json({ error: 'Connection Failed...!' }));
     if (!id && !jobId) return res.status(404).json({ error: "Don't have the ID...!" });

     let getProposals;

     if (jobId) {
       getProposals = await proposals.find({ jobId: new ObjectId(jobId) }).toArray();    
     }else{
       getProposals = await proposals.find({ userId: new ObjectId(id) }).toArray();
      }
      
      res.status(200).json(getProposals);
   } catch (error) {
     res.status(500).json({ error: 'Connection Failed...!' });
   }
 }
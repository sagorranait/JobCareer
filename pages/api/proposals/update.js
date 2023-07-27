import { ObjectId } from 'mongodb';
import DB, { proposals } from '@/database/connection';

export default async function proposalUpdateHandler(req, res) {
   const { id } = req.query;
   const data = req.body;
   try {
     await DB.connect().catch((error) => res.json({ error: 'Server Connection Failed...!' }));
     if (!id) return res.status(404).json({ error: "Don't have the ID...!" });

    const query = { _id: new ObjectId(id) };
    const updatedDoc = { $set: data };

    const result = await proposals.updateOne( query, updatedDoc, {new: true});
    if (result.acknowledged) {
      res.status(200).json({ result, message: 'Updated successfully!' });
    } else {
      res.status(500).json({ error: 'Update Failed...!' });
    }
   } catch (error) {
     res.status(500).json({ error: 'Connection Failed...!' });
   }
 }
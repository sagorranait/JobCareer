import { ObjectId } from 'mongodb';
import DB, { user } from '@/database/connection';

export default async function userUpdateHandler(req, res) {
  const { userId } = req.query;
  const data = req.body;

  try {
    await DB.connect().catch((error) => res.json({ error: 'Server Connection Failed...!' }));
    if (!userId) return res.status(404).json({ error: "Don't have the ID...!" });

    const query = { _id: new ObjectId(userId) };
    const updatedDoc = { $set: data };

    const result = await user.updateOne( query, updatedDoc, {new: true});

    if (result.acknowledged) {
      res.status(200).json({ result, message: 'Updated successfully!' });
    } else {
      res.status(500).json({ error: 'Update Failed...!' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Connection Failed...!' });
  }
 }
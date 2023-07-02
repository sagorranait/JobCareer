const { ObjectId } = require('mongodb');
import DB, { user } from '@/database/connection';

export default async function userPhotoHandler(req, res) {
   const { id } = req.query;
   const { imgURL } = req.body;

   try {
      await DB.connect().catch((error) => res.json({ error: 'Connection Failed...!' }));

     const result = await user.updateOne( { _id: ObjectId(id) }, { $set: {imgURL} });
     console.log(result);
     res.status(200).json({ message: 'Updated successfully!' });
   } catch (error) {
     res.status(500).json({ error: 'Connection Failed...!' });
   }
 }
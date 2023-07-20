import DB, { user } from '@/database/connection';
const { ObjectId } = require('mongodb');

export default async function userPhotoHandler(req, res) {
   const { id } = req.query;
   const { description, hourlyrate, tagline, available, location   } = req.body;

   try {
     await DB.connect().catch((error) => res.json({ error: 'Server Connection Failed...!' }));

     const query = { _id: ObjectId(id) }
     const updatedDoc = {
        $set:{        
           "about": description,
           "address": location,
           "available": available,
           "designation": tagline,
           "hourly": hourlyrate,
        }
     }

    const result = await user.updateOne( query, updatedDoc);
    console.log(result);
     res.status(200).json({ message: 'Updated successfully!' });
   } catch (error) {
     res.status(500).json({ error: 'Connection Failed...!' });
   }
 }
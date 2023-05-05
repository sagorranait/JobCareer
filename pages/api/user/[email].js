import DB, { user } from '@/database/connection';

export default async function userEmailHandler(req, res) {
   const { email } = req.query;

   try {
     await DB.connect().catch((error) => res.json({ error: 'Connection Failed...!' }));
     if (!email) return res.status(404).json({ error: "Don't have the Email...!" });

     const getUserByEmail = await user.findOne({ email });
     res.status(200).json(getUserByEmail);
   } catch (error) {
     res.status(500).json({ error: 'Connection Failed...!' });
   }
 }
 
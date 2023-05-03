import DB, { user } from '@/database/connection';
import { hash } from 'bcryptjs';

export default async function signupHandler(req, res){
    try {
      DB.connect().catch(error => res.json({ error: "Connection Failed...!"}));
  
      if(req.method === 'POST'){
        if(!req.body) return res.status(404).json({ error: "Don't have form data...!"});
        const { type, username, email, password } = req.body;
  
        const checkexisting = await user.findOne({ email });
        if(checkexisting) return res.status(422).json({ message: "User Already Exists...!"});
  
        if (type === 'client') {
            await user.insertOne({type, username, email, hashPassword: await hash(password, 12)});         
         }else{
            await user.insertOne({type, username, email, connects: '100', hashPassword: await hash(password, 12)});
         }
  
        res.status(200).json({ message: "User created successfully!" });
      } else {
        res.status(500).json({ message: "HTTP method not valid only POST Accepted"})
      }
    } catch (error) {
      res.status(500).json({ error: "Connection Failed...!"});
    }

}
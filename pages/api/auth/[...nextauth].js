import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import DB, { user } from '@/database/connection';
import { compare } from 'bcryptjs';

export default NextAuth({
   providers : [
       CredentialsProvider({
           name : "Credentials",
           async authorize(credentials, req){
                await DB.connect().catch(error => { error: "Connection Failed...!"})
                
                // check user existance
                const query = { email: credentials.email };
                const result = await user.findOne(query);

                if(!result){
                    throw new Error("No user Found with Email Please Sign Up...!")
                }

                const checkPassword = await compare(credentials.password, result.hashPassword);
               
                // incorrect password
                if(!checkPassword || result.email !== credentials.email){
                    throw new Error("Username or Password doesn't match");
                }

                return result;
           }
       })
   ],
   secret: "6dd8aaa1aef83d4b3d1f015c0ffcbf495202b6f3190e6d61b040ea1ebbee8ecd",
   session: {
       strategy: 'jwt',
   }
})
const { MongoClient, ServerApiVersion } = require('mongodb');

const DB = new MongoClient(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.b18cp.mongodb.net/?retryWrites=true&w=majority`, 
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    serverApi: { 
      version: ServerApiVersion.v1, 
      strict: true, 
      deprecationErrors: true, 
    }
  }
);

const user = DB.db('jobcareer').collection('user');
const jobs = DB.db('jobcareer').collection('jobs');
const proposals = DB.db('jobcareer').collection('proposals');

export { user, jobs, proposals };
export default DB;
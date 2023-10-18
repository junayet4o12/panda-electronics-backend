const express = require('express')
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion , ObjectId} = require('mongodb');
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.fbi4wg4.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {
    try {
  
      await client.connect();
  
      const database = client.db("TechnologyShop");
      const companycollection = database.collection("company");
  
      
  
      app.get('/company', async(req, res)=> {
        const company =  companycollection.find();
        const result = await company.toArray();
        res.send(result);
  
      })
      
  
      
  
      
  
  
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
  
  
    }
  }
  run().catch(console.dir);
  
  
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
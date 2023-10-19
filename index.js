const express = require('express')
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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
        const applecollection = database.collection("apple");
        const huaweicollection = database.collection("huawei");
        const xiaomicollection = database.collection("xiaomi");
        const onepluscollection = database.collection("oneplus");
        const samsungcollection = database.collection("samsung");
        const oppocollection = database.collection("oppo");
        const clientproducts = database.collection("ClientProducts");



        app.get('/company', async (req, res) => {
            const company = companycollection.find();
            const result = await company.toArray();
            res.send(result);

        })
        app.get('/company/:name', async (req, res) => {
            const name = req.params.name;
            const cursor = { name: (name) };
            const company = await companycollection.findOne(cursor);
            res.send(company);
        })
        app.post('/apple', async (req, res) => {
            const product = req.body;
            const result = await applecollection.insertOne(product);
            res.send(result);
        })
        app.get('/apple', async (req, res) => {
            const appleproduct = applecollection.find();
            const result = await appleproduct.toArray();
            res.send(result);

        })
        app.get('/apple/:id', async (req, res) => {
            const id = req.params.id;
            const cursor = { _id: new ObjectId(id) };
            const product = await applecollection.findOne(cursor);
            res.send(product);
        })
        app.put('/apple/:id', async (req, res) => {
            const id = req.params.id;
            const product = req.body;
            const query = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedproduct = {
                $set: {
                    name: product.name,
                    brandname: product.brandname,
                    photo: product.photo,
                    price: product.price,
                    category: product.category,
                    rating: product.rating,
                    details: product.details
                }
            }
            const result = await applecollection.updateOne(query, updatedproduct, options)
            res.send(result)
        })
        app.post('/huawei', async (req, res) => {
            const product = req.body;
            const result = await huaweicollection.insertOne(product);
            res.send(result);
        })
        app.get('/huawei', async (req, res) => {
            const huaweiproduct = huaweicollection.find();
            const result = await huaweiproduct.toArray();
            res.send(result);

        })
        app.get('/huawei/:id', async (req, res) => {
            const id = req.params.id;
            const cursor = { _id: new ObjectId(id) };
            const product = await huaweicollection.findOne(cursor);
            res.send(product);
        })
        app.put('/huawei/:id', async (req, res) => {
            const id = req.params.id;
            const product = req.body;
            const query = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedproduct = {
                $set: {
                    name: product.name,
                    brandname: product.brandname,
                    photo: product.photo,
                    price: product.price,
                    category: product.category,
                    rating: product.rating,
                    details: product.details
                }
            }
            const result = await huaweicollection.updateOne(query, updatedproduct, options)
            res.send(result)
        })

        app.post('/oneplus', async (req, res) => {
            const product = req.body;
            const result = await onepluscollection.insertOne(product);
            res.send(result);
        })
        app.get('/oneplus', async (req, res) => {
            const oneplusproduct = onepluscollection.find();
            const result = await oneplusproduct.toArray();
            res.send(result);

        })
        app.get('/oneplus/:id', async (req, res) => {
            const id = req.params.id;
            const cursor = { _id: new ObjectId(id) };
            const product = await onepluscollection.findOne(cursor);
            res.send(product);
        })
        app.put('/oneplus/:id', async (req, res) => {
            const id = req.params.id;
            const product = req.body;
            const query = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedproduct = {
                $set: {
                    name: product.name,
                    brandname: product.brandname,
                    photo: product.photo,
                    price: product.price,
                    category: product.category,
                    rating: product.rating,
                    details: product.details
                }
            }
            const result = await onepluscollection.updateOne(query, updatedproduct, options)
            res.send(result)
        })

        app.post('/samsung', async (req, res) => {
            const product = req.body;
            const result = await samsungcollection.insertOne(product);
            res.send(result);
        })
        app.get('/samsung', async (req, res) => {
            const samsungproduct = samsungcollection.find();
            const result = await samsungproduct.toArray();
            res.send(result);

        })
        app.get('/samsung/:id', async (req, res) => {
            const id = req.params.id;
            const cursor = { _id: new ObjectId(id) };
            const product = await samsungcollection.findOne(cursor);
            res.send(product);
        })
        app.put('/samsung/:id', async (req, res) => {
            const id = req.params.id;
            const product = req.body;
            const query = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedproduct = {
                $set: {
                    name: product.name,
                    brandname: product.brandname,
                    photo: product.photo,
                    price: product.price,
                    category: product.category,
                    rating: product.rating,
                    details: product.details
                }
            }
            const result = await samsungcollection.updateOne(query, updatedproduct, options)
            res.send(result)
        })
        app.post('/xiaomi', async (req, res) => {
            const product = req.body;
            const result = await xiaomicollection.insertOne(product);
            res.send(result);
        })
        app.get('/xiaomi', async (req, res) => {
            const xiaomiproduct = xiaomicollection.find();
            const result = await xiaomiproduct.toArray();
            res.send(result);

        })
        app.get('/xiaomi/:id', async (req, res) => {
            const id = req.params.id;
            const cursor = { _id: new ObjectId(id) };
            const product = await xiaomicollection.findOne(cursor);
            res.send(product);
        })
        app.put('/xiaomi/:id', async (req, res) => {
            const id = req.params.id;
            const product = req.body;
            const query = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedproduct = {
                $set: {
                    name: product.name,
                    brandname: product.brandname,
                    photo: product.photo,
                    price: product.price,
                    category: product.category,
                    rating: product.rating,
                    details: product.details
                }
            }
            const result = await xiaomicollection.updateOne(query, updatedproduct, options)
            res.send(result)
        })

        app.post('/oppo', async (req, res) => {
            const product = req.body;
            const result = await oppocollection.insertOne(product);
            res.send(result);
        })
        app.get('/oppo', async (req, res) => {
            const oppoproduct = oppocollection.find();
            const result = await oppoproduct.toArray();
            res.send(result);

        })
        app.get('/oppo/:id', async (req, res) => {
            const id = req.params.id;
            const cursor = { _id: new ObjectId(id) };
            const product = await oppocollection.findOne(cursor);
            res.send(product);
        })
        app.put('/oppo/:id', async (req, res) => {
            const id = req.params.id;
            const product = req.body;
            const query = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedproduct = {
                $set: {
                    name: product.name,
                    brandname: product.brandname,
                    photo: product.photo,
                    price: product.price,
                    category: product.category,
                    rating: product.rating,
                    details: product.details
                }
            }
            const result = await oppocollection.updateOne(query, updatedproduct, options)
            res.send(result)
        })
        app.post('/client', async (req, res) => {
            const product = req.body;
            const result = await clientproducts.insertOne(product);
            res.send(result);
        })
        app.get('/client', async (req, res) => {
            const clientproduct = clientproducts.find();
            const result = await clientproduct.toArray();
            res.send(result);

        })
        app.get('/client/:id', async (req, res) => {
            const id = req.params.id;
            const cursor = { _id: new ObjectId(id) };
            const product = await clientproducts.findOne(cursor);
            res.send(product);
        })
        app.delete('/client/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await clientproducts.deleteOne(query);
            res.send(result)
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
const {MongoClient} = require('mongodb');
const { db } = require('./model/listing');
const url= 'mongodb://127.0.0.1:27017';
const databaseName='userLists'
const client= new MongoClient(url);

async function dbConnect()
{
    let result = await client.connect();
    db= result.db(databaseName);
    // return db.collection('list')

    // return db.collection('products');
  
}
module.exports= dbConnect;
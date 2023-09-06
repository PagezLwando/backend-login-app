const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017/hyperiondb';

async function connectDatabase() {
  const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

  try {
    await client.connect();
    console.log('Successfully connected to MongoDB server');

    const database = client.db();
    return database;
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}
// exports.ConnectDatabase = connectDatabase();
module.exports = {
  connectDatabase: connectDatabase,
};
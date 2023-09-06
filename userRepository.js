const db = require('./db.js');

async function saveUser(user) {
    console.log('Saving user');
    const dbConnection = await db.connectDatabase();
    const usersCollection = dbConnection.collection('users');
    const insertUser = await usersCollection.insertOne(user);

    console.log('User inserted:', insertUser.insertedId); 
}
module.exports = { saveUser: saveUser };
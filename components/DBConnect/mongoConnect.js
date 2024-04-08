

const { MongoClient, ObjectId } = require('mongodb');

// URI подключения к MongoDB
const uri = 'mongodb+srv://wallesalex205:pQZfK2YJYnlpGGom@cluster.l5jyrdj.mongodb.net/';

// Создание клиента MongoDB
const client = new MongoClient(uri);

async function main() {
  try {
    // Подключение к MongoDB
    await client.connect();
    console.log('Connected to MongoDB');

    // Получение базы данных и коллекции
    const database = client.db('mydatabase');
    const collection = database.collection('users');

    // CREATE (Добавление пользователя)
    const newUser = { name: 'Alice', age: 30, email: 'alice@example.com' };
    const insertResult = await collection.insertOne(newUser);
    console.log('New user added:', insertResult.insertedId);

    // READ (Получение пользователя)
    const userId = insertResult.insertedId;
    const user = await collection.findOne({ _id: ObjectId(userId) });
    console.log('User found:', user);

    // UPDATE (Обновление пользователя)
    const updateResult = await collection.updateOne(
      { _id: ObjectId(userId) },
      { $set: { age: 31 } }
    );
    console.log('User updated:', updateResult.modifiedCount);

    // DELETE (Удаление пользователя)
    const deleteResult = await collection.deleteOne({ _id: ObjectId(userId) });
    console.log('User deleted:', deleteResult.deletedCount);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    // Закрытие соединения с MongoDB
    await client.close();
    console.log('Connection closed');
  }
}

// Вызов функции main для выполнения операций с MongoDB
main();

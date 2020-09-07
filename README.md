# ArialTest
 1. Зайти в Mongo.exe и затем прописать
 use cards-Создает базу данных cards
 insertMany(records)-Добавляет в базу данных Mongo все записи.
 Вместо records скопировать все записи из MOCK_DATA.json
 Я не создавал в MOCK_DATA.json поле id , так как , сама функция его добавляет , при пуше в базу данных.
 2. Сервер запускается 
 npm run server
 3. Клиент запускается
 npm start
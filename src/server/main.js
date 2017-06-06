import express from 'express';
import compression from 'compression';
import  { MongoClient } from 'mongodb';

const app = express();
const port = process.env.PORT || 8000;

app.use(compression());
//app.use('/build', express.static('build'));

let db;

MongoClient.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/derdiedas', (err, database) => {
  if (err) return console.log(err);
  db = database;
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/categories', (req, res) => {
  db.collection('category').find({},{title: 1}).toArray( (err, result) => {
    res.send(result);
  });
});

app.get('/api/quiz/:title', (req, res) => {
  db.collection('category').find({'title': req.params.title}).toArray( (err, result) => {
    res.send(result);
  });
});


app.listen(port);
console.log(`Server started on port ${port}`); // eslint-disable-line
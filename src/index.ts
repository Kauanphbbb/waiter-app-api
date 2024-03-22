import express from 'express';
import mongoose from 'mongoose';

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();
    const port = 3001;

    app.get('/', (req, res) => {
      res.send('App is running!');
    });

    app.listen(port, () => console.log(`🚀 Running on port ${port}`));
  })
  .catch(() => console.log('Error connecting to MongoDB'));

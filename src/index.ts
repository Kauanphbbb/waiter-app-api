import express from 'express';

const app = express();

const port = 3001;

app.get('/', (req, res) => {
  res.send('App is running!');
});

app.listen(port, () => console.log(`🚀 Running on port ${port}`));

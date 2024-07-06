const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const db = require('../database/index.js');
// const cors = require('cors');
const server = require('http').createServer(app);
const userRoutes = require('./routes/userRoutes.js');
// app.use(cors);

db.connect((err) => {
  if (err) {
    console.log(`ERROR⚠️⚠️: ${err}`)
  } else {
    console.log('✅Postgres DB connected!')
  }
})

app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.json());

// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../dist/index.html'));
// })

app.use('/api/user', userRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})
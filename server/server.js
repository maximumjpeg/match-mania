const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.json);

// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../dist/index.html'));
// })

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})
const express = require('express');
const app = express();
const PORT = 9000;
app.get('/', (req, res) => {
  res.json('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`)
})
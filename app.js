const express = require('express');
const app = express();
const messageController = require('./controllers/messageController');

app.set('view engine', 'ejs');

app.get('/', messageController.getTimeline);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

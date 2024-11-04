const messageModel = require('../models/messageModel');

const getTimeline = (req, res) => {
  const messages = messageModel.getMessages();
  res.render('timeline', { messages });
};

module.exports = { getTimeline };

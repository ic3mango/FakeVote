const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');

const Poll = mongoose.model('Poll');

module.exports = app => {
  app.post('/api/polls/add', requireLogin, async (req, res) => {
    const { title, options: optionsValues } = req.body;
    const options = optionsValues.map(value => ({ name: value }));

    const poll = await new Poll({
      title,
      options,
      _user: req.user.id
    }).save();

    res.send(poll);
  });

  app.get('/api/polls/:id');
  app.get('/api/polls');
}

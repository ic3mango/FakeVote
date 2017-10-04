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

  app.get('/api/polls/:id', requireLogin, async (req, res) => {
    const userPolls = await Poll.find({ _user: req.params.id },
      "title id")
      .limit(20).sort({ dateCreated: -1 });

    res.send(userPolls);
  });

  app.get('/api/polls', async (req, res) => {
    const allPolls = await Poll.find({})
      .limit(20).sort({ dateCreated: -1 });
    res.send(allPolls);
  });

  app.get('/api/poll/:id', async (req, res) => {
    const poll = await Poll.findById(req.params.id);

    res.send(poll);
  });
}

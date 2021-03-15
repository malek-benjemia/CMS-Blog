const { Post } = require('../models');

const postdata = [
  {
    title: 'I love apples',
    content: 'Apples are the best fruits in the universe.',
    user_id: 4
  },
  {
    title: 'I bought a cat.',
    content: 'I wanted a cat since a long time. I finally bought one.',
    user_id: 4
  },
  {
    title: 'Who can lend me his car?',
    content: 'I need to go to Montreal.',
    user_id: 4
  },
  {
    title: 'Who can lend me his jet?',
    content: 'I need to go to Paris.',
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;

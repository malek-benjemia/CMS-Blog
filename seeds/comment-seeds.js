const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'I changed my mind and dont like apples.',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'I like oranges now.',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'This thread is not intresting.',
    user_id: 2,
    post_id: 1
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;

const router = require('express').Router();
const Post = require('../models/post');
const User = require('../models/user');
const school = require('../models/school');

// Find all
// router.get('/', (req, res) => {
//   Post.findAll()
//     .then((postName) => {
//       if (!postName.length) return res.status(404).send({ err: 'Post not found' });
//       res.send(`find successfully: ${postName}`);
//     })
//     .catch(err => res.status(500).send(err));
// });

// Find One by postName
// router.get('/postName/:postName', (req, res) => {
//   Post.findOneByPostName(req.params.postName)
//     .then((Post) => {
//       if (!Post) return res.status(404).send({ err: 'Post not found' });
//       res.send(`findOne successfully: ${Post}`);
//     })
//     .catch(err => res.status(500).send(err));
// });

// 구현은 일단 완료
// Create new Post document
router.post('/', (req, res) => {
  User.findOneByUserId(req.body.userId)
  .then(user => {
    if (!user) res.status(500).send("사용자가 존재하지 않습니다.")
    console.log(">>>> user : ", user);
    // return School.findOneBySchoolName(req.body.schoolName);
    return Post.create(req.body)
  })
  // .then(school => {
    // console.log(">>>> school : ", school);
    // if (!school) res.status(500).send("학교가 존재하지 않습니다.")
    // return Post.create(req.body)
  // })
  .then(post => res.send(post))
  .catch(err => res.status(500).send(err));
});

// Update by postName
// router.put('/postName/:postName', (req, res) => {
//   Post.updateByPostName(req.params.postName, req.body)
//     .then(Post => res.send(Post))
//     .catch(err => res.status(500).send(err));
// });

// Delete by postName
// router.delete('/postName/:postName', (req, res) => {
//   Post.deleteByPostName(req.params.postName)
//     .then(() => res.sendStatus(200))
//     .catch(err => res.status(500).send(err));
// });

module.exports = router;
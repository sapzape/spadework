const router = require('express').Router();
const User = require('../models/user');
const School = require('../models/school');

// Find all
router.get('/', (req, res) => {
  User.findAll()
    .then((userId) => {
      if (!userId.length) return res.status(404).send({ err: 'User not found' });
      res.send(`find successfully: ${userId}`);
    })
    .catch(err => res.status(500).send(err));
});

// Find One by userId
router.get('/userId/:userId', (req, res) => {
  User.findOneByUserId(req.params.userId)
    .then((user) => {
      if (!user) return res.status(404).send({ err: 'User not found' });
      res.send(`findOne successfully: ${user}`);
    })
    .catch(err => res.status(500).send(err));
});

// 일단 기능은 체크 완료
// Create new user document
router.post('/', (req, res) => {
  User.create(req.body)
    .then(user => res.send(user))
    .catch(err => res.status(500).send(err));
});

// Update by userId
router.put('/userId/:userId', (req, res) => {
  User.updateByUserId(req.params.userId, req.body)
    .then(user => res.send(user))
    .catch(err => res.status(500).send(err));
});

// 일단 기능은 구현 완료
router.put('/userId/:userId/likeSchool', (req, res) => {
  School.findOneBySchoolName(req.body.schoolName)
  .then(school => {
    if (!school) res.status(500).send("존재하지 않는 학교명입니다.");
    return User.updateByUserId(req.params.userId, {likeSchool: school})
  })
  .then(user => res.send(user))
  .catch(err => res.status(500).send(err));
});

// 일단 기능은 구현 완료
router.put('/userId/:userId/unlikeSchool', (req, res) => {
  School.findOneBySchoolName(req.body.schoolName)
  .then(school => {
    if (!school) res.status(500).send("존재하지 않는 학교명입니다.");
    return User.unlikeByUserId(req.params.userId, {likeSchool: school})
  })
  .then(user => res.send(user))
  .catch(err => res.status(500).send(err));
});

// Delete by userId
router.delete('/userId/:userId', (req, res) => {
  User.deleteByUserId(req.params.userId)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err));
});

module.exports = router;
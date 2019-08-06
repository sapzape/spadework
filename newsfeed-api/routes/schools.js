const router = require('express').Router();
const School = require('../models/school');

// Find all
// router.get('/', (req, res) => {
//   School.findAll()
//     .then((schoolName) => {
//       if (!schoolName.length) return res.status(404).send({ err: 'School not found' });
//       res.send(`find successfully: ${schoolName}`);
//     })
//     .catch(err => res.status(500).send(err));
// });

// Find One by schoolName
// router.get('/schoolName/:schoolName', (req, res) => {
//   School.findOneBySchoolName(req.params.schoolName)
//     .then((School) => {
//       if (!School) return res.status(404).send({ err: 'School not found' });
//       res.send(`findOne successfully: ${School}`);
//     })
//     .catch(err => res.status(500).send(err));
// });

// Create new School document
router.post('/', (req, res) => {
  School.create(req.body)
    .then(School => res.send(School))
    .catch(err => res.status(500).send(err));
});

// Update by schoolName
// router.put('/schoolName/:schoolName', (req, res) => {
//   School.updateBySchoolName(req.params.schoolName, req.body)
//     .then(School => res.send(School))
//     .catch(err => res.status(500).send(err));
// });

// Delete by schoolName
// router.delete('/schoolName/:schoolName', (req, res) => {
//   School.deleteBySchoolName(req.params.schoolName)
//     .then(() => res.sendStatus(200))
//     .catch(err => res.status(500).send(err));
// });

module.exports = router;
const router = require('express').Router();

const eventController = require('../controllers/eventController');

router.get('/', eventController.list);
router.post('/add', eventController.save);
router.get('/update/:id', eventController.edit);
router.post('/update/:id', eventController.update);
router.get('/delete/:id', eventController.delete);

module.exports = router;

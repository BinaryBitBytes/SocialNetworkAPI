const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);
router.use((req, res) => res.send('Wrong route!'));

module.exports = router;

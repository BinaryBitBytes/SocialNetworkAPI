const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/thought', thoughtRoutes);
router.use('/user', userRoutes);
router.use((req, res) => res.send('Wrong route!'));

module.exports = router;

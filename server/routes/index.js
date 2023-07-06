const express = require('express')
const router = express.Router({ mergeParams: true })

router.use('/auth', require('./authRoutes'))
router.use('/type', require('./typeRouters'))
router.use('/quality', require('./qualityRoutes'))
router.use('/user', require('./userRoutes'))

module.exports = router

const router = require('express').Router()

router.get('/articles', function(req, res) {
  res.json({
    total: 0
  })
})

module.exports = router
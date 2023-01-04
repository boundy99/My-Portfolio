const router = require('express').Router();

router.get('/', (req, res) => {
    const boundary = { boundy: 'Hello World' };
    res.send(boundary);
});

module.exports = router;
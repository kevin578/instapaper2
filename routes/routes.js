const router = require("express").Router();
const getNYT = require('../sources/nyt')

getNYT.then((articles)=> {
    router.get('/api/nytimes', (req, res) => res.json(articles))
});

module.exports = router;
    
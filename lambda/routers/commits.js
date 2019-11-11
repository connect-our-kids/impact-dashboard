// router for /api/commits, returns data fetched by queryGitHub function in models

const express = require('express');
const data = require('../dataQueries/queryGitHub');

const router = express.Router();

router.get('/', async (req, res) => {
    const query = await data.queryGitHub();
    res.status(200).json({message: 'Look at all these express chickens!', query})
})


module.exports = router;
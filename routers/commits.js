const express = require('express');
const data = require('../models/queryGitHub');

const router = express.Router();

router.get('/', async (req, res) => {
    // res.status(200).json({message: "Shakespeare router is up!"}) // initial router test succeeded
    const query = await data.queryGitHub();
    res.status(200).json({message: 'Look at all these express chickens!', query})
})


module.exports = router;
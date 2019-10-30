// router for /api/shakespeareQuotes, returns data from queryShakespeare
const express = require('express');
const data = require('../models/queryShakespeare');

const router = express.Router();

router.get('/', async (req, res) => {
    // res.status(200).json({message: "Shakespeare router is up!"}) // initial router test succeeded
    const query = await data.queryShakespeare();
    res.status(200).json({message: 'Look at all these express chickens!', query})
})


module.exports = router;
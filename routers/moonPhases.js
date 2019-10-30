const express = require('express');
const data = require('../models/queryMoonPhase');

const router = express.Router();

router.get('/', async (req, res) => {
    const query = await data.queryMoonPhases();
    res.status(200).json({message: 'Look at all these express moons!', query})
})


module.exports = router;
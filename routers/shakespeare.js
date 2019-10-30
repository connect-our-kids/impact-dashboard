const express = require('express');
// TODO import shakespeare data model

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({message: "Shakespeare router is up!"})
})

module.exports = router;
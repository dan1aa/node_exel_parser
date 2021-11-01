const router = require("express").Router();
const xlsx = require('node-xlsx');
const FileSchema = require('../models/File.js')

router.get("/api/data", async (req, res) => {
    await FileSchema.find({})
    .then(file => {
        res.status(200).end(JSON.stringify({
            message: 'success',
            data: file
        }))
    })
    .catch(err => {
        throw new Error(err)
    })
});

module.exports = router;
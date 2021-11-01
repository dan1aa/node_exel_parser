const router = require("express").Router();
const xlsx = require('node-xlsx');
const FileSchema = require('../models/File.js')

router.post("/api/save", async (req, res) => {
    try {
        await FileSchema.deleteMany({})
        const { filename } = req.body;
        let file = xlsx.parse(`${filename}.xlsx`)[0].data;
        if(!file) throw new Error('Please, enter a correct filename')
        const filteredFile = file.slice(1)
        for(let i = 0; i < filteredFile.length; i++) {
            const newFile = await new FileSchema({
                firstName: filteredFile[i][0],
                age: +filteredFile[i][1]
            })
            await newFile.save()
        }
        res.status(200).end(JSON.stringify({
            message: 'success',
        }))
    }
    catch(e) {
        throw new Error(e)
    }
});

module.exports = router;
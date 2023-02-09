const asyncHandeler = require('express-async-handler')
const Image = require('../models/imageModel')

// image Upload
const multer = require('multer')
const path = require('path')

const getImage = asyncHandeler(async (req, res) => {
    const image = await Image.find()
    res.status(200).json(image)
})
const postImage = asyncHandeler(async (req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error('pls add a file');
    }
    const image = await Image.create({
        name: req.body.name,
        desc: req.body.desc,
        // department: req.body.department,

        img: req.file.path







    })
    console.log("image found")
    image.save()
    res.status(200).json(image)
})
const putImage = asyncHandeler(async (req, res) => {
    const img = await Image.findById(req.params.id)
    if (!img) {
        res.status(400)
        throw new Error('Project not found')

    }
    const updateImage = await Image.findById(req.params.id, req.body, {
        new: true
    })

    res.status(200).json(updateImage)
})
const deleteImage = asyncHandeler(async (req, res) => {
    const image = await Image.findById(req.params.id)
    if (!image) {
        res.status(400)
        throw new Error('Project not found')

    }
    await image.remove()
    res.status(200).json({ id: req.params.id })
})



// - this is the code for file upload 

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if (mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('image')




module.exports = {

    getImage,
    postImage,
    putImage,
    deleteImage,
    upload
}



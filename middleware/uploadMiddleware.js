// const multer = require('multer')

// // const storage = multer.diskStorage({
// //     destination:(req,file,cb) =>{
// //         cb(null,'upload')

// //     },
// //     filename:(req,file,cb) => {
// //         cb(null,file.originalname);
// //     }
// // });
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'Images')
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname))
//     }
// })

// const upload = multer({
//     storage: storage,
//     limits: { fileSize: '1000000' },
//     fileFilter: (req, file, cb) => {
//         const fileTypes = /jpeg|jpg|png|gif/
//         const mimeType = fileTypes.test(file.mimetype)  
//         const extname = fileTypes.test(path.extname(file.originalname))

//         if(mimeType && extname) {
//             return cb(null, true)
//         }
//         cb('Give proper files formate to upload')
//     }
// }).single('image')







// const upload = multer({storage:storage}).single('image');
// module.exports = {
//     upload,
// }



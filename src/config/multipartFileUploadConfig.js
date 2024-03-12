const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../../', 'public'),
  filename: (req, file, callback) => {
    let fileName = Date.now().toString(36) + '_' + file.originalname
    callback(null, fileName)
  }
})

const uploads = multer({ storage })

module.exports = uploads
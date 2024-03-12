const express = require('express')
const router = express.Router()

let uploads = require('../../../config/multipartFileUploadConfig')

const productController = require('../controllers/productController')


router.get('/', productController.getAllProducts)
router.get('/:id', productController.getProductById)
router.post('/', uploads.single('productBanner'), productController.createProduct)



module.exports = router
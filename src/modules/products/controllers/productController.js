const getAllProducts = (req, res) => {
  console.log(req.query)
  res.send("all products")
}

const createProduct = (req, res) => {
  console.log(req.body.name)
  console.log(req.file.originalname)
  res.send('created product')
}

const getProductById = (req, res) => {
  const productId = +req.params.id
  console.log(typeof productId)
  res.send(`single product by given id: ${productId}`)
}


module.exports = {
  getAllProducts,
  getProductById,
  createProduct
}
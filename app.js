const express = require('express')
const app = express()

//conditionally use dotenv to load environment variables from .env file in non-production environment
process.env.NODE_ENV !== 'production' && require('dotenv').config()

//routes import
const { productRoutes } = require('./src/modules/products')

//PORT
const port = process.env.PORT || 3000
const apiVersion = process.env.API_VERSION || 'v1'

//static folder - middlewire
app.use(express.static('public'))

//middleware to parse url-encoded data, json-body
app.use(express.urlencoded({extended: true}))
app.use(express.json())


//route
app.use(`/api/${apiVersion}/products`, productRoutes)


app.get(`/api/${apiVersion}`, (req, res) => {
  res.json({name: 'homepage'})
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})



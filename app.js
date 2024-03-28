const express = require('express')
const app = express()

//conditionally use dotenv to load environment variables from .env file in non-production environment
process.env.NODE_ENV !== 'production' && require('dotenv').config()

//routes import
const { productRoutes } = require('./src/modules/products')

//PORT
const port = process.env.PORT || 3000
const apiVersion = process.env.API_VERSION || 'v1'

//serve react frontend as static
app.use(express.static('frontend/dist'))

//static folder - middlewire
app.use(express.static('public'))

//middleware to parse url-encoded data, json-body
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//route

const apiUrl = `/api/${apiVersion}`

app.use(`${apiUrl}/products`, productRoutes)



app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})



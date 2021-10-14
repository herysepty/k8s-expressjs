const { default: Axios } = require('axios')
const express = require('express')
const app = express()
const port = 3002

app.get('/', async(req, res) => {
  
  try {
    // const getData = await Axios.get('http://expressjs-service.default.svc.cluster.local:3000') // access another service
    // res.send('This is response another service '+getData.data)

    const getData = await Axios.get('http://example-service.default.svc.cluster.local/data/v1/countries') // access another service
    res.send(getData.data)
  } catch (error) {
    res.status(400).send(error)
  }

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
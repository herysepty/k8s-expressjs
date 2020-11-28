const { default: Axios } = require('axios')
const express = require('express')
const app = express()
const port = 3000

app.get('/', async(req, res) => {
  
  try {
    const getData = await Axios.get('http://10.106.185.70:30001')
    res.send('Hello World! '+getData.data)
    
  } catch (error) {
    res.status(400).send(error)
  }

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
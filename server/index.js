const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', async (req, res)=>{
  const result = await axios.get(`https://jsonplaceholder.typicode.com/posts`).catch(err=>{ return err.response })
  res.json(result.data)
})

app.listen(3001, ()=>{
  console.log('running on 3001')
})

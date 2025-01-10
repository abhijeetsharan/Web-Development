const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req,res) => {
  res.send("got a GET Request")
//   res.sendFile('../dummy.html', {root:__dirname});
})

router.post('/items', (req,res) => {
  // res.send("got a POST Request");
  res.json({x:1, y:2, z:3});
})

router.put('/items/:id', (req, res) => {
  res.send("got a PUT Request");
})

router.delete('/items/:id', (req,res) => {
  res.send("got a DELETE Request");
})

module.exports = router
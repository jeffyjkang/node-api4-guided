// const server = require("./api/server.js");

// const port = 9000;
// server.listen(port, () => {
//   console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
// });

// console.log(process.argv)
// console.log(process.env)

require('dotenv').config()
const express = require('express')
const server = express()

server.get('/api/users', (req,res) => {
  res.json([
    {id: 1, username: 'foo'},
    {id: 2, username: 'bar'},
    {id: 3, username: 'baz'}
  ])
})
const PORT = process.env.PORT || 8080

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})

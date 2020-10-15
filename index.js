const express = require('express')
const app = express()
const port = 3000

//! nó được định nghĩa là Route (hiểu cách khách là tuyến đường là dấu / ).
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// nếu có 1 dòng thì có thể viết như thế này.
// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
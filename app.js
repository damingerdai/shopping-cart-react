const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '5mb' }));
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === '12345') {
    res.json({
      status: 200,
      message: 'ok'
    })
  } else {
    res.json({
      status: -1,
      error: '用户名或者密码错误'
    })
  }

})

app.get('/goods', (req, res) => {
  const createDate = (id, name, price, num) => {
    return {id, name, price, num, total: price * num };
  }

  const rows = [
    createDate(1, '电视机', 2000, 2),
    createDate(2, '手机', 1500, 3),
    createDate(3, '洗衣机', 300, 2),
    createDate(4, '电脑', 7000, 4)
  ];

  res.json({
    status: 200,
    data: rows
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
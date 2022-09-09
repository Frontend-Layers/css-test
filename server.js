import express from 'express'

const app = express()
const port = 3000

import cssTest from './index.js'

const url = '';
cssTest(url)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', async (req, res) => {
  res.send('test')
})

app.listen(port, () => console.log(`Server: http://localhost:3000/`))



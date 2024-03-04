const express = require('express');
const app = express();

app.use(express.json());
const port = 3000;

app.post('/evaluate', (req, res) => {
    res.send(req.body)
    console.log();
  })

app.get('/', (req, res) => {
    res.send('Hello World!')
})
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
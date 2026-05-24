const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/status', (req, res) => {
  res.json({ status: 'sucesso', message: 'Backend respondendo do Kubernetes!' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Backend listening on ${port}`);
});

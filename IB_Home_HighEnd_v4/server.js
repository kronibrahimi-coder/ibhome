
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const products = require('./data/products.json');
app.get('/api/products', (req, res) => res.json(products));

app.post('/api/contact', (req, res) => {
  console.log('Contact form:', req.body);
  res.json({ ok: true });
});

app.listen(port, () => console.log('Server listening on port', port));

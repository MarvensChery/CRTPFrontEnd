const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 2000;
const app = express();

app.use(express.static('public'));

app.get('/', (req, rep) => {
  rep.sendFile(path.join(__dirname, 'public/login/pageLoginHTML.html'));
});

app.get('/menu', (req, rep) => {
  rep.sendFile(path.join(__dirname, 'public/ippe/test.html'));
});

app.listen(PORT, () => {
  console.log(`Mon application du côté client est en train d'exécuter sur le port http://localhost:${PORT}`);
});

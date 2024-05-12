const express = require('express');
const app = express();
const PORT = process.env.PORT || 6000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bienvenido a ConstruBudget API');
});

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

app.get('/api/projects', (req, res) => {
    res.json([{ name: "Proyecto 1", budget: 10000 }]);
  });
  
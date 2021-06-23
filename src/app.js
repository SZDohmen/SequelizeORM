const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000

//midlewares:
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use('/', (req, res) => res.json({ clave: "Conectado al servidor"}));

app.listen(PORT, () => {
    console.log("Servidor en puerto "+PORT);
});

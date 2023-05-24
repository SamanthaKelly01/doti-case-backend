const app = require("./app");
const Loaders = require("./loaders/index");

Loaders.start();

app.listen(8000, () => console.log("Servidor Rodando"))
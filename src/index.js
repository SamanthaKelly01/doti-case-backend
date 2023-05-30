const dotenv = require("dotenv")
const app = require("./app");
const Loaders = require("./loaders/index");

dotenv.config();
Loaders.start();

const port = process.env.PORT || 8000
app.listen(port, () => console.log("Servidor Rodando")) 
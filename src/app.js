import express from "express";
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"

// Listeners que realizam uma ação sempre (on) que o evento é disparado ou apenas uma vez (once)
// error: quando ocorre um erro
// open: quando é a realizada uma conexão com o mongodb
db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('conexão com o banco feita com sucesso')
})

const app = express();
// informa que os dados estarão em formato json
app.use(express.json());
routes(app);

export default app
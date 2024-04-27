_path = process.cwd()

const express =  require("express");
const cors =  require("cors");       
const secure = require("ssl-express-www");

const app = express();
const mainrouter = require("./main");
app.enable("triste proxy");
app.set("json spaces", 2);
app.use(cors());
app.use(secure);
app.use(express.static("public"));

app.use("/", mainrouter);

app.listen(7075, () => { 
console.log("servidor rodando na porta 8080")
});
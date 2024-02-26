const express = require("express");
const mainRouter = require("./routers/mainRouter");

const app = express()

app.use(express.static("./assets")) // permet de servir des fichiers statiques qui se trouvent dans "./assets"
app.use(mainRouter)

app.listen(3000, (err)=>{
    console.log(err ? err : "Connecter au serveur");
})
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname + "/public/"));
app.use(express.static(__dirname + "/CSS/"))


app.get("/login", (req, rep) => {
    //WORKING!!
    rep.sendFile(path.join(__dirname, "./public/new_login.html"))
})

app.get("/menu", (req, rep) => {
    //WORKING!!
    rep.sendFile(path.join(__dirname, "./public/index2.html"));
});

app.get("/IPPE", (req, rep) => {
    //WORKING!!
    rep.sendFile(path.join(__dirname, "./public/MenuRechercheIPPE.html"))
});

app.get("/IPPE/resultatNegatif", (req, rep) => {
    //WORKING!!
    rep.sendFile(path.join(__dirname, "./public/Negatif.html"));
});

app.get("/menu/IPPE/resultatLibCondi", (req,rep) => {
    //WORKING!!
    rep.sendFile(path.join(__dirname, "./public/LibCondi.html"));
});


app.listen(PORT, () => {
	console.log(`Serveur en courd d'exécution: http://localhost:${PORT}/login`);
});
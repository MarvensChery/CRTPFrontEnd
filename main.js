const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();

app.use('/appweb', express.static('appweb'));


app.get("/login", (req, rep) => {
    rep.sendFile(path.join(__dirname, "newpage/new_login.html"))
})

app.get("/menu", (req, rep) => {
    rep.sendFile(path.join(__dirname, "Menu/index2.html"));
});

app.get("/IPPE", (req, rep) => {
    rep.sendFile(path.join(__dirname, "MenuRechercheIPPE/MenuRechercheIPPE.html"))
});

app.get("/IPPE/resultatNegatif", (req, rep) => {
    rep.sendFile(path.join(__dirname, "ResultatRechercheIPPE/Negatif.html"));
});

app.get("/IPPE/resultatLibCondi", (req,rep) => {
    rep.sendFile(path.join(__dirname, "ResultatRechercheIPPE/LibCondi.html"));
});


app.listen(PORT, () => {
	console.log(`Serveur en courd d'exécution: http://localhost:${PORT}/login`);
});
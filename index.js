const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/index", (req, res) => {
    const devList = ["Backend", "Frontend", "Fullstack"];
    const analyticsList = ["Engenharia de dados", "Ciência de dados"];
    res.render("index", { titulo: "Blue", devList: devList, analyticsList: analyticsList});
  });

app.get("/detalhes", (req, res) => {
    const devList = ["Backend", "Frontend", "Fullstack"];
    const analyticsList = ["Engenharia de dados", "Ciência de dados"];
    res.render("detalhes", { titulo: "Blue", devList: devList, analyticsList: analyticsList});
  });

app.get("/cadastro", (req, res) => {
    // const devList = ["Backend", "Frontend", "Fullstack"];
    // const analyticsList = ["Engenharia de dados", "Ciência de dados"];
    res.render("cadastro");
  });

app.post("/novo", (req, res) => {
    res.render("novo");
  });

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);

// app.get("/detalhes", (req, res) => {
//   res.detalhes("detalhes");
// });
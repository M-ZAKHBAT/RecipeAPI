import express from "express";
import { ConnexionDB } from "./src/commun/connexiondb.js";
import { route as recepRouter } from "./src/receps/routes.js";

const port = 3000;

const database = new ConnexionDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ status: "UP" });
});
//recepies
app.use("/receps", recepRouter);
database.generateConnexion().then(() => {
  app.listen(port, () => {
    console.log(`Starting Server https://localhost:${port}`);
  });
});

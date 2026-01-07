import express from "express";
import playersRouter from "./routers/players.js"

const app = express();
const port = 3132;

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
    console.log("Rotta /");
    res.send("test")
})
app.use("/players",playersRouter)


app.listen(port, () => {
    console.log(`${port}`)
})
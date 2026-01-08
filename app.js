import express from "express";
import playersRouter from "./routers/players.js";
import notFound from "./middlewares/pageNotFound.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();
const port = 3132;

app.use(express.static("public"));
app.use(express.json());


app.get("/", (req, res) => {
    console.log("Rotta /");
    res.send("test")
})
app.use("/players",playersRouter)

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`${port}`)
})


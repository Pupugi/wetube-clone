import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("view", process.cwd() + "src/views");
app.use(express.urlencoded({ extended: true }));

app.listen(4000);

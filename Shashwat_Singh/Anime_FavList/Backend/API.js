const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

const animeSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageLink: String,
});

const Anime = mongoose.model("Anime", animeSchema);

mongoose.connect("mongodb+srv://ShashwatPS:s@cluster0.1alkv6j.mongodb.net/Anime", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get("/anime", async (req, res) => {
    const Animes = await Anime.find({});
    res.json({ Animes });
});

app.post("/anime", async (req, res) => {
    const newAnime = {
        title: req.body.title,
        description: req.body.description,
        imageLink: req.body.imageLink,
    };
    try {
        const newSave = new Anime(newAnime);
        await newSave.save();
        res.status(200).json(newAnime);
    } catch {
        res.status(500);
    }
});

app.use((req, res, next) => {
    res.status(404).send();
});

app.listen(3000);
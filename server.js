const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const articleModel = require("./models/Articles");

const connectDB = require("./config/db");
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

//CREATE AN ARTICLE
app.post("/createarticle", async (req, res) => {
  try {
    await articleModel.create(req.body);

    res.status(200).json({
      message: "article created",
    });
  } catch {
    (error) => {
      res.status(500).json({
        message: error.message,
      });
    };
  }
});

//GET ALL THE ARTICLES
app.get("/getarticles", async (req, res) => {
  try {
    const articles = await articleModel.find();

    res.status(200).json({
      message: "articles found",
      article: articles,
    });
  } catch {
    (error) => {
      res.status(500).json({
        message: error.message,
      });
    };
  }
});

//GET THE ARTICLES BY ID
app.get("/getarticlebyid/:id", async (req, res) => {
  try {
    const articles = await articleModel.findById(req.params.id);

    if (!articles) {
      res.status(404).json({
        message: "article not found",
      });
    } else {
      res.status(200).json({
        message: "article found by id",
        article: articles,
      });
    }
  } catch {
    (error) => {
      res.status(500).json({
        message: error.message,
      });
    };
  }
});

//UPDATE AN ARTICLE BY ID
app.patch("/updatearticlebyid/:id", async (req, res) => {
  try {
    if (
      !(await articleModel.findByIdAndUpdate(req.params.id, req.body))
    ) {
      res.status(404).json({
        message: "article not found",
      });
    } else {
      res.status(200).json({
        message: "article found by id and updated",
      });
    }
  } catch {
    (error) => {
      res.status(500).json({
        message: error.message,
      });
    };
  }
});

////DELETE AN ARTICLE BY ID
app.delete("/deletearticlebyid/:id", async (req, res) => {
  try {
    if (!(await articleModel.findByIdAndDelete(req.params.id))) {
      res.status(404).json({
        message: "article not found",
      });
    } else {
      res.status(200).json({
        message: "article found by id and deleted",
      });
    }
  } catch {
    (error) => {
      res.status(500).json({
        message: error.message,
      });
    };
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

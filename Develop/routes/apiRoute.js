const router = require("express").Router();
const response = require("express/lib/response");

const fs = require("fs");
const util = require("util");

const readFromFile = util.promisify(fs.readFile);

const readAndAppend = (content, file) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error("there is an error", err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      fs.writeFile(file, JSON.stringify(parsedData), (err, res) => {
        if (err) {
          console.err("there is an error", err);
        } else {
          console.log("successfully created");
        }
      });
    }
  });
};

router.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

router.post("/", (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      // note_id: uuidv4(),
    };

    readAndAppend(newNote, "./db/db.json");
    res.json(`tip added successfully`);
  } else {
    res.error("there is an error");
  }
});



module.exports = router;

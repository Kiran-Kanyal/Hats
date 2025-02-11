const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

let houseCounts = {
  Gryffindor: 31,
  Hufflepuff: 31,
  Ravenclaw: 31,
  Slytherin: 31,
};

app.post("/api/sort", (req, res) => {
  const { name } = req.body;

  // Find the house with the lowest count
  const house = Object.keys(houseCounts).reduce((minHouse, currentHouse) => {
    return houseCounts[currentHouse] < houseCounts[minHouse]
      ? currentHouse
      : minHouse;
  });

  // Assign the house to the student
  houseCounts[house]++;

  res.json({ house });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

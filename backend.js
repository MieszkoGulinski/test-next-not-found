const express = require("express");
const app = express();
const port = 2999;

// Example data

const items = [
  { id: "1", content: "Item 1" },
  { id: "2", content: "Item 2" },
  { id: "3", content: "Item 3" },
  // { id: "4", content: "Item 4" },
  // { id: "5", content: "Item 5" },
];

// Routes

app.get("/items", (req, res) => {
  res.send(items);
});

app.get("/items/:id", (req, res) => {
  const item = items.find((item) => item.id === req.params.id);
  if (item) {
    res.send(item);
  } else {
    res.sendStatus(404);
  }
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});

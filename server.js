const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Указываем папку, где лежат HTML и CSS
app.use(express.static(path.join(__dirname)));

// Главная страница
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен: http://localhost:${PORT}`);
});

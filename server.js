const express = require("express");
const { join } = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(join(`${__dirname}/dist/index.html`));
});

app
  .listen(PORT, () => {
    // eslint-disable-next-line prefer-template
    console.log("server is running on port: " + PORT);
  })
  .on("error", function (err) {
    if (err.errno === "EADDRINUSE") {
      console.error(`----- Port ${PORT} is busy, trying with different port ----`);
    } else {
      console.error(err);
    }
  });

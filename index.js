const express = require("express");
const app = express();
var cors = require("cors");
var path = require("path");
const port = 3000;
// var public = path.join(__dirname, "builds");
app.use(cors());
app.use(
  "/builds/new-portfolio/static/media/",
  express.static(path.join(__dirname, "builds", "new-portfolio", "static"))
);

app.get("/port", (req, res) => {
  //   res.sendFile(path.join(public, "new-portfolio", "index.html"));
  res.sendFile(path.join(__dirname, "builds", "new-portfolio", "index.html"));
});

app.get("/builds/new-portfolio/static/css/:file", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "builds",
      "new-portfolio",
      "static",
      "css",
      req.params.file
    )
  );
});

app.get("/builds/new-portfolio/static/js/:file", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "builds",
      "new-portfolio",
      "static",
      "js",
      req.params.file
    )
  );
});

app.get("/builds/new-portfolio/static/media/:file", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "builds",
      "new-portfolio",
      "static",
      "js",
      req.params.file
    )
  );
});
app.get("/static/media/:file", (req, res) => {
  const { pathname } = new URL(req.headers.referer);

  if (pathname === "/port") {
    res.sendFile(
      path.join(
        __dirname,
        "builds",
        "new-portfolio",
        "static",
        "media",
        req.params.file
      )
    );
  }
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`);
});

const http = require("http");
const url = require("url");
const fs = require("fs");

const paths = {
  "/": "index.html",
  about: "about.html",
  "contact-me": "contact-me.html",
};

http
  .createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const filename = paths[parsedUrl.pathname] ?? "404.html";

    fs.readFile(filename, (err, file) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write(file);
        return res.end();
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(file);
      return res.end();
    });
  })
  .listen(8080);

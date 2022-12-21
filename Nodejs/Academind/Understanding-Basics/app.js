const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers)
  // process.exit()
  const url = req.url;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head>Hello World!</head>");
    res.write("<body><h1>Testing if else working</h1></body>");
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head>Hello World!</head>");
  res.write("<body><h1>Testing code creation</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3001);

// dependencies
const http = require("http");

// app object - module scaffolding
const app = {};

// configuration
app.config = {
  port: 3000,
};

// create server
app.createServer = () => {
  const server = http.createServer(app.handleRequest);
  server.listen(app.config.port, () => {
    console.log(`Server is running on port ${app.config.port}`);
  });
};

// handle request response
app.handleRequest = (req, res) => {
  res.end("Hello World");
};

// start server
app.createServer();

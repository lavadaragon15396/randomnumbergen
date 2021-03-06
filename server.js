const http = require("http");
const fs = require('fs').promises;

const port = 80;

const requestListener = function (req, res) {
    fs.readFile(__dirname + "/website/index.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
};

const server = http.createServer(requestListener);
server.listen(port,() => {
    console.log(`Server is running on the port:${port}`);
});
let {  posts } = require("../model");

function deletePostHandler(req, res) {
  let index = "";
    req.on("data", chunk => {index += chunk});
    req.on("end", () =>{
      delete posts[index]
      res.writeHead(200, {"content-type":"text/html"});
      res.end();
    });
    req.on('error', err => {
        console.log(err)
      });
}

module.exports = deletePostHandler;
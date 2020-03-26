let { posts } = require("../model");

function getPostsHandler(req,res){
    let headers = {"content-type": "application/json"}
    res.writeHead(200, headers);
    res.end(JSON.stringify(posts));
}

module.exports = getPostsHandler;
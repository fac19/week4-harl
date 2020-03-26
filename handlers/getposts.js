const model = require("../model");

function getPostsHandler(req,res){
    console.log("wevs");
    let headers = {"content-type": "application/json"}
    res.writeHead(200, headers);
    res.end(JSON.stringify(model.posts));
}

module.exports = getPostsHandler;
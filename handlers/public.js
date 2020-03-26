const fs = require("fs");
const path = require("path");

const types = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    ico: "image/x-icon",
};

function publicHandler(request,response){
    let pathBits = request.url.split("/");
    let lastFile = pathBits[pathBits.length-1];
    let extension = lastFile.split(".")[1] || "";
    let newPath = path.join(__dirname, "..", ...pathBits);
    fs.readFile(newPath, (error, file) => {
        if (error){
            response.writeHead(404, {"content-type": "text/html"});
            response.end("<h1>404: File not found</h1>");
        } else {
            let headers = {"content-type": types[extension] };
            console.log("extension:", extension);
            response.writeHead(200, headers);
            response.end(file);
        }
    });
}

module.exports = publicHandler;
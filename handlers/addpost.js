const model = require("./model.js");

function addPostHandler(request, response) {
  let body = "";
  // callback runs every time the stream has the next bit of data
  request.on("data", chunk => {
    const data = new URLSearchParams(body);
    const username = data.get("username");
    const postTitle = data.get("post_title");
    const blogMessage= data.get("blog_message");
    body += chunk;

  });
  // callback runs when request finishes and we have all the data
  request.on("end", () => {
    console.log(body); // we should have the whole request body now
    response.writeHead(200, { "content-type": "text/html" });
    // pushing form data into model object
    response.end(); // redirect to homepage with newpost added
  });
}

module.exports = addPostHandler;

// author, title and body

// url 
// username=john&post_title=hello&blog_message=world
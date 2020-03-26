let { getCount, increment, posts } = require("../model");

function addPostHandler(request, response) {
  let body = "";
  // callback runs every time the stream has the next bit of data
  request.on("data", chunk => {
    body += chunk;
  });
  // callback runs when request finishes and we have all the data
  request.on("end", () => {
    console.log(body); // we should have the whole request body now
    const data = new URLSearchParams(body);
    const username = data.get("username");
    const postTitle = data.get("post_title");
    const blogMessage = data.get("blog_message");
    
    // pushing form data into model object
    increment()
    const id = getCount();
    const newPost = {

        author: username,
        title: postTitle,
        body: blogMessage
  
    };
    posts[id]=newPost
    console.log(posts)
    response.writeHead(302, { location: "/" }); // redirect to homepage with newpost added
    response.end();
  });
}

module.exports = addPostHandler;

// author, title and body

// url username=john&post_title=hello&blog_message=world

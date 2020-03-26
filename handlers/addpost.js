const { counter, posts } = require("../model");

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
    const blogMessage= data.get("blog_message");
    response.writeHead(302, { location: "/homepage" } ); // redirect to homepage with newpost added (there's a particular )

    // pushing form data into model object
        // counter = counter++; // test to see if counter is incrementing
        // const id = counter;
        // const posts = {
        //   id: id,
        //   author: username,
        //   title: postTitle,
        //   body: blogMessage
        // };

    response.end("/homepage.html"); 
  });
}

module.exports = addPostHandler;

// author, title and body

// url username=john&post_title=hello&blog_message=world
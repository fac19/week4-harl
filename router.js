// Serves all the static files
const publicHandler = require("./handlers/public");
const getPostsHandler = require("./handlers/getposts");
const homeHandler = require("./handlers/home");
const newPostHandler = require("./handlers/newPost")

// Serves a page for missing files
// const missingHandler = require("./handlers/missing");

// Handler for newpost form submission
const addPostHandler = require("./handlers/addpost");

const deletePostHandler = require("./handlers/deletepost");

function router(request, response) {
  const url = request.url;
  const method =request.method
 
  if(url === "/" && method !== "DELETE") {
    homeHandler(request, response)
  } else if (url === "/getposts") {
    getPostsHandler(request, response);
  } else if (url.includes("public")) {
    publicHandler(request, response);
  } else if (url === "/newpost" && method === "GET") {
    newPostHandler(request, response)
  } else if (url === "/" && method === "DELETE") {
    deletePostHandler(request, response);
  } else if (method === "POST" && url === "/newpost") { // double check URL
    addPostHandler(request, response);
  } else {
    // missingHandler(request, response);
  }
}

module.exports = router;

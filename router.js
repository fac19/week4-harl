// Serves all the static files
const publicHandler = require("./handlers/public");
const getPostsHandler = require("./handlers/getposts");

// Serves homepage.html
// const homeHandler = require("./handlers/home");

// Serves a page for missing files
// const missingHandler = require("./handlers/missing");

function router(request, response) {
  const url = request.url;
  if (url === "/getposts") {
    getPostsHandler(request, response);
  } else if (url.includes("public")) {
    publicHandler(request, response);
  } else {
    // missingHandler(request, response);
  }
}

module.exports = router;

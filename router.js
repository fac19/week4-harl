// Serves all the static files
const publicHandler = require("./handlers/public");



// Serves homepage.html
// const homeHandler = require("./handlers/home");

// Serves a page for missing files
// const missingHandler = require("./handlers/missing");

function router(request, response) {
  const url = request.url;
  if (url === "/") {
    // homeHandler(request, response);
  } else if (url.includes("public")) {
    publicHandler(request, response);
  } else {
    // missingHandler(request, response);
  }
}

module.exports = router;

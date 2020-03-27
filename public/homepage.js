const template = document.getElementById("template")
const postsList = document.getElementById("postsList")

fetch("/getposts")
  .then(res => {
    if(!res.ok) throw new Error("Bad response from Server")
    return res;
  })
  .then(res => res.json())
  .then(data => { 
    postsList.innerHTML = "";
    Object.keys(data).forEach( key => {
      const post = data[key];
      const newBlog = template.content.cloneNode(true);
      let title = newBlog.querySelector(".article__title");
      let body = newBlog.querySelector(".article__body");
      let author = newBlog.querySelector(".article__author");
      let deleteButton = newBlog.querySelector(".article__button-delete");
      title.textContent = post.title;
      body.textContent = post.body;
      author.textContent = post.author;
      deleteButton.addEventListener("click", () => {
        fetch("/", { method: "DELETE", body: key })
          .then(location.reload());
      })
      postsList.appendChild(newBlog);
    });
  })
  .catch(err => console.error(err))
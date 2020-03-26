const template = document.getElementById("template")
const postsList = document.getElementById("postsList")
fetch("/getposts")
  .then(res => {
    if(!res.ok) throw new Error("Bad response from Server")
  })
  .then(res => res.json)
  .then(data => { 
    postList.innerHTML = "";
    data.foreach( post => {
      const newBlog = template.content.cloneNode(true)
      let title = newBlog.querySelect("article__title")
      let body = newBlog.querySelect("article__body")
      let author = newBlog.querySelect("article__author")
      title.textContent = post.title;
      body.textContent = post.body;
      author.textContent = post.author;
      postsList.appendChild(newBlog)
    });
  })
  .catch(err => console.error(err))
// DOM grabs
const blogTitle = document.getElementById('blog-title')
const blogText = document.getElementById('blog-text')
const submitBtn = document.getElementById('submit-btn')

// Global Variables
let postArr = []

// Render any changes to HTML
function renderHTML() {
    let htmlText = document.querySelector('.prev-posts')
    for (let post of postArr) {
        htmlText.innerHTML += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr>
        `
    }
}

// Get API details and put into array
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then(data => {
      postArr = data.slice(0, 6)
      renderHTML()
  })
// DOM grabs
const blogTitle = document.getElementById('blog-title')
const blogText = document.getElementById('blog-text')
const submitBtn = document.getElementById('submit-btn')
const blogForm = document.querySelector('#blog-form')

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

  // When BTN pressed: grab values, assign values, POST values, render to HTML then clear form

  blogForm.addEventListener('submit', function(e) {
      e.preventDefault()
      const userTitle = blogTitle.value
      const userText = blogText.value

      const data = {
          title: userTitle,
          body: userText
      }

      fetch('https://jsonplaceholder.typicode.com/posts', {
          method: "POST",
          body: JSON.stringify(data),
          header: {"Content-type": "application/json"}
      }) // Fetch
        .then(response => response.json())
        .then(post => { // Think the error is around this line or below
            postArr.unshift(post)
            renderHTML()
            userTitle.value = ''
            userTitle.value = ''
        }) // .then(newData..)
  })
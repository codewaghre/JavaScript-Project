//Query Selector

const postsListContainer = document.querySelector('.posts-list-container')
// console.log(postListContainer);


// fetch Data Using XHR Method
function fetchUsingXhr() {
    const xhr = new XMLHttpRequest()
    xhr.open('GET' , 'https://jsonplaceholder.typicode.com/posts');
    xhr.responseType = "json"
    xhr.send()

    xhr.onload = () => {
        if (xhr.status === 200) {
            displayResults(xhr.response ) 
        } else {
            console.log("Data Loadinggg ");
        }
    }
}
//  fetchUsingXhr()


// Fetch the data using Fetch
function fetchmethod() {
    const fetchdata = fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET'
    })
    fetchdata
    .then((response) => 
        response.json()
        
    ).then((result) => 
        displayResults(result)
        
    ).catch((err) => 
        console.log(err)
        
    );
}
// fetchmethod()


// fetch data using Async-Await
 async function asyncAwaitMethod() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
      });
     
     const result =  await response.json()
     displayResults(result)

     console.log(result);
     

}
// asyncAwaitMethod()


// fetch the data using XMR and Async-await
function helpMethod(method, url) {

    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.responseType = 'json'
        xhr.send()
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.response)
            } else {
                reject(xhr.response)
            }
        }

    })
     return promise
}

async function XHRAndAsyncAwait() {
    const response = await helpMethod( 'GET', "https://jsonplaceholder.typicode.com/posts")
    displayResults(response)

}
XHRAndAsyncAwait()



 // Display the  Result 
function displayResults(posts) {
        postsListContainer.innerHTML = posts.map((postItem) =>
    `
    <div class="post-item">
    <h3>${postItem.title}</h3>
    <p>${postItem.body}</p>
    </div>
    `
    )
    .join(" ");
}
// displayResults()  // call function is not need 



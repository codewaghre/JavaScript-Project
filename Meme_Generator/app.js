const generateBtn = document.querySelector('.generate-button')
const memeTitle = document.querySelector('.meme-title')
const memeImage = document.querySelector('.meme-image')
const authorOutput = document.querySelector('.author')


function getMeme() {
    fetch(" https://meme-api.com/gimme")
        .then((Response) => Response.json())
        .then((data) => {
            const { author, title, url } = data 
            console.log(author, title, url);
            
            memeTitle.innerHTML = title
            memeImage.src = url
            authorOutput.innerHTML = author
            
        })

}
getMeme()

generateBtn.addEventListener('click', () => {
   getMeme()
})



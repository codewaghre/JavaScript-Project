const tabContainer = document.querySelector(".container");
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".content");


tabContainer.addEventListener('click', (e) => {
    console.log(e.target.dataset);
    const currentId = e.target.dataset.id

    if (currentId) {

        tabButtons.forEach((btn) => {
            btn.classList.remove('active')
        })

        e.target.classList.add('active')


        tabContents.forEach((btn) => {
            btn.classList.remove('active')
        })

        const currentElement = document.getElementById(currentId)
        currentElement.classList.add('active')

    }
})
    

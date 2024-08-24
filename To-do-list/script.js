// Selector
const checkBoxList = document.querySelectorAll('.custom-checkbox')
const inputFields = document.querySelectorAll('.goal-input')
const errorLabel = document.querySelector('.error-label')
const progressBar = document.querySelector('.progress-bar')
const progressValue = document.querySelector('.progress-value')

//LocalStorage

const allGoals =  {}

//CheckBox List 
checkBoxList.forEach((checkBox) => {
    checkBox.addEventListener('click', (e) => {
        const allGoalsAdded = [...inputFields].every(function (input) {
            return input.value
        })
        if (allGoalsAdded) {
            checkBox.parentElement.classList.toggle('completed')
            progressValue.style.width = '33%'
        } else {
            progressBar.classList.add('show-error')
        }
    })
})

inputFields.forEach((input) => {
    input.addEventListener('focus', () => {
        progressBar.classList.remove('show-error')
    })

    input.addEventListener('input',(e) => {
        allGoals[input.id] = e.target.value
        localStorage.setItem('')
        console.log(allGoals);
        
    }) 
})

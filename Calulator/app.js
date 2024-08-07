const output = document.querySelector('.result');
const buttons = document.querySelectorAll('button');
console.log("buttons", buttons)
console.log("output", output)

let str = ''
buttons.forEach((button) => {
    button.addEventListener('click', (e )=> {
        console.log(e.target.innerHTML);

        if (e.target.innerHTML === 'AC') {
            str = ''
            output.value = str
        } else if (e.target.innerHTML === '=') {
            str = eval(str)
            output.value = str
        } else if (e.target.innerHTML === 'DEL') {
            str = str.substring( 0 , str.length - 1)
            output.value = str
        } else {
            str += e.target.innerHTML
            output.value = str
        }

    })
})

//only number is allowed in input 
output.addEventListener('keypress', (e) => {
    console.log(e.target.innerContent);

    if (isNaN(e.key)) {
        e.preventDefault()
    }

})


    // output.addEventListener('keydown', (e) => {
    //     console.log(e.key);

    //     if (isNaN(e.key)  ) {
    //         e.preventDefault()
            
    //     }
    // })
    
    
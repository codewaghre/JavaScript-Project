const button = document.querySelectorAll('.button')
const body = document.querySelector("body")

// Using arrow function and IF else 
button.forEach(button =>
    button.addEventListener('click', function (e) {

        if (e.target.id === 'grey') {
            body.style.backgroundColor = "grey"
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = "blue"
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = "white"
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = "yellow"
        }

    }))

// another apporch using swtich case 

// button.forEach(function (button) {
//     console.log(button)
//     button.addEventListener('click', function (e) {
//         console.log(e.target)
//         const colour = e.target.id
//         switch (colour) {
//             case "grey":
//                 body.style.backgroundColor = "grey";
//                 break;
//             case "white":
//                 document.body.style.backgroundColor = "white";
//                 break;
//             case "blue":
//                 document.body.style.backgroundColor = "blue";
//                 break;
//             case "yellow":
//                 document.body.style.backgroundColor = "yellow ";
//                 break;
//             default:
//                 body, style.backgroundColor = ""

//         }
//     })

// })





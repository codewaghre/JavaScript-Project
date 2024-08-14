// selector

const searchInput = document.getElementById('search-input')
const mytable = document.getElementById('myTable')

const tr = mytable.getElementsByTagName('tr')


searchInput.addEventListener('input', function () {
    const searchValue = searchInput.value.toUpperCase()

    for (i = 0; i < tr.length; i++){
        let table = tr[i].getElementsByTagName('td')[2]
        
        if (table) {
            let textvalue = table.textContent.toUpperCase() 
            if(textvalue.includes(searchValue)){
                tr[i].style.display =""
            } else {
                tr[i].style.display ="none"
            }
        }
    } 

})
//Selector
const searchItem = document.getElementById('search-input')
const itemList = document.getElementById('item-list').getElementsByTagName('li')


//search input

searchItem.addEventListener('input', function () {
    
    const searchInput= searchItem.value.toLocaleLowerCase()

    for (i = 0; i < itemList.length; i++){
        const itemName = itemList[i].textContent.toLowerCase()

        if (itemName.includes(searchInput)) {
            itemList[i].style.display = 'block'
        } else {
            itemList[i].style.display = 'none';
        }
    }
})
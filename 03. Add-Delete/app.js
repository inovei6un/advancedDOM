function addItem() {
    let input = document.getElementById('newItemText');
    let list = document.getElementById('items');
    let text = input.value;
    let liItem = document.createElement('li');

    list.addEventListener('click', deleteItem)

    liItem.innerHTML = `${text} <a href="#">[Delete]</a>`
    list.appendChild(liItem);

    input.value = '';

    function deleteItem(item) {
        let element = item.target.parentNode
        element.remove()
    }
}

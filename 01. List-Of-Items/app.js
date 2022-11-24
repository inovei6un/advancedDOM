function addItem() {
    let input = document.getElementById('newItemText')
    let list = document.getElementById('items');
    let text = input.value;
    let liItem = document.createElement('li');

    liItem.textContent = text;
    list.appendChild(liItem);

    input.value = ''
}
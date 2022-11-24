function addItem() {
    let inputText = document.getElementById('newItemText')
    let text = inputText.value
    let inputValue = document.getElementById('newItemValue')
    let value = inputValue.value

    let option = document.createElement('option')
    option.textContent = text
    option.value = value

    let select = document.getElementById('menu')
    select.appendChild(option)
    
    inputText.value = ''
    inputValue.value = ''
}
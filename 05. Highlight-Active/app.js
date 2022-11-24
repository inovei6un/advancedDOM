function focused() {
    sections = document.querySelectorAll('input');
    
    for (let input of sections) {
        input.addEventListener('focus', focusInput);
        input.addEventListener('blur', blurInput);
    }

    function focusInput(event) {
        event.target.parentElement.classList.add('focused')
    }

    function blurInput(event) {
        event.target.parentElement.classList.remove('focused')

    }
}
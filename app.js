const inputs = document.querySelectorAll('.area-input')

inputs.forEach(element => {
    element.addEventListener('click', () => {
        inputs.forEach(element => {
            element.classList.remove('active')
        })
        element.classList.add('active')
    })
});
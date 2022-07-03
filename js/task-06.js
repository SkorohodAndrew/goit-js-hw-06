const inputEl = document.querySelector('#validation-input')

const inputLenghEl = inputEl.dataset.length;


inputEl.addEventListener('blur', onInputBlur)


function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(inputLenghEl)) {
        inputEl.classList.add('valid');
        return inputEl.classList.remove('invalid');
    } 
    inputEl.classList.add('invalid');
    return inputEl.classList.remove('valid');
    
}


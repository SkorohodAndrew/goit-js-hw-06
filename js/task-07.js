const refs = {
    font: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),

}
 
refs.text.style.fontSize = refs.font.value + 'px';
refs.font.addEventListener('input', onInputBlur);


function onInputBlur(event) {
        refs.text.style.fontSize = event.currentTarget.value + 'px';
    
}
const counter = {
    value: 0,
    decrement() {
        console.log('decrement -> this', this)
        this.value -= 1;
    },

    increment() {
        console.log('increment -> this', this)
        this.value += 1;
    }
    
}


const incrementBtn = document.querySelector('button[data-action="increment"]');
incrementBtn.classList.add('counter__button');
console.log(incrementBtn)

const decrementBtn = document.querySelector('button[data-action="decrement"]');
decrementBtn.classList.add('counter__button');
console.log(decrementBtn)


const valueEl = document.querySelector('#value');
valueEl.classList.add('item');

incrementBtn.addEventListener('click',  () => {
    counter.increment();
    console.log(counter)

    valueEl.textContent =  counter.value
})

decrementBtn.addEventListener('click', () =>  {
    counter.decrement();
    console.log(counter)

    valueEl.textContent =  counter.value
})


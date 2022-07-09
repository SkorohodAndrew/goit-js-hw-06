const categoryEl = document.querySelectorAll('h2');
const elementsEl = document.querySelectorAll('.item ul');

console.log('Number of categories:',elementsEl.length);


categoryEl.forEach((element) => {
    console.log('Category:', element.textContent);
    
    elementsEl.forEach((element) => {
        console.log('Elements:', element.children.length);
        
    });
    
});















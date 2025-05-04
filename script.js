// 1. Change text content dynamically
const textChangerBtn = document.getElementById('text-changer');
const dynamicText = document.getElementById('dynamic-text');

textChangerBtn.addEventListener('click', () => {
    dynamicText.textContent = "Text changed successfully at " + new Date().toLocaleTimeString();
});

// 2. Modify CSS styles via JavaScript
const styleChangerBtn = document.getElementById('style-changer');
const styleDemo = document.getElementById('style-demo');
let isStyled = false;

styleChangerBtn.addEventListener('click', () => {
    isStyled = !isStyled;
    styleDemo.style.backgroundColor = isStyled ? '#ff6b6b' : '#74b9ff';
    styleDemo.style.color = isStyled ? 'white' : 'black';
    styleDemo.style.padding = isStyled ? '20px' : '10px';
    styleDemo.textContent = isStyled ? 'Styled!' : 'This box will change color.';
});

// 3. Add/remove element when button is clicked
const toggleElementBtn = document.getElementById('toggle-element');
const elementContainer = document.getElementById('element-container');
let newElementExists = false;
let newElement = null;

toggleElementBtn.addEventListener('click', () => {
    if (!newElementExists) {
        newElement = document.createElement('p');
        newElement.textContent = 'New dynamically added element!';
        newElement.classList.add('highlight');
        elementContainer.appendChild(newElement);
        toggleElementBtn.textContent = 'Remove Element';
    } else {
        elementContainer.removeChild(newElement);
        toggleElementBtn.textContent = 'Add Element';
    }
    newElementExists = !newElementExists;
});
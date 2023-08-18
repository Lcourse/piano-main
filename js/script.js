const keys = document.querySelectorAll(".key");

const handleMouseDown = (key) => {

    if (key.className.includes('black')) {
        key.style.background = 'linear-gradient(#222, black)'
        key.style.borderBottom = 'none'
        key.style.height = '148px'
        return;
    }

    key.style.background = '#ddd'
}

const handleMouseUp = (key) => {
    if (key.className.includes('black')) {
        return;
    }
    
    key.style.background = 'white';
}

keys.forEach((key) => {


    key.addEventListener('mousedown', () => handleMouseDown(key))

    key.addEventListener('mouseup', () => handleMouseUp(key))
});
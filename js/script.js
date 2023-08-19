const keys = document.querySelectorAll(".key");

/* Função de tocar a nota */
const playNote = (note) => {
    const audio = new Audio(`../notes/${note}.wav`)
    audio.play()

}
/* Função que apertar a tecla e estilização #ddd */
const handleMouseDown = (key) => {
    playNote(key.getAttribute('data-note'))

    if (key.className.includes('black')) {
        key.classList.add('black--pressed')
        return;
    }

    key.style.background = '#ddd'
}

const handleMouseUp = (key) => {

    if (key.className.includes('black')) {
        key.classList.remove('black--pressed')
        return;
    }
    
    key.style.background = 'white';
}

keys.forEach((key) => {


    key.addEventListener('mousedown', () => handleMouseDown(key))

    key.addEventListener('mouseup', () => handleMouseUp(key))
});


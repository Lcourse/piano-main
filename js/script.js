const keys = document.querySelectorAll(".key");
const checkbox = document.querySelector(".checkbox__keys");
const switcher = document.querySelector(".switcher");
const keysSection = document.querySelector('.piano__keys')

/* Função de tocar a nota */
const playNote = (note) => {
  const audio = new Audio(`../notes/${note}.wav`);
  audio.play();
};
/* Função que apertar a tecla e estilização #ddd */
const handleMouseDown = (key) => {
  playNote(key.getAttribute("data-note"));

  if (key.className.includes("black")) {
    key.classList.add("black--pressed");
    return;
  }

  key.style.background = "#ddd";
};

/* Função que apertar a tecla e estilização #ddd */
const handleMouseUp = (key) => {
  if (key.className.includes("black")) {
    key.classList.remove("black--pressed");
    return;
  }

  key.style.background = "white";
};

keys.forEach((key) => {
  key.addEventListener("mousedown", () => handleMouseDown(key));

  key.addEventListener("mouseup", () => handleMouseUp(key));
});

/* Ativar e desativar a visualização das teclas */
checkbox.addEventListener("change", ({ target }) => {
  if (target.checked) {
    switcher.classList.add("switcher--active");
    keysSection.classList.remove('disabled-keys')
    return;
  }

  switcher.classList.remove('switcher--active');
  keysSection.classList.add('disabled-keys')
});

const open = document.getElementById('openBtn');
const modal = document.getElementById('modal');
const close = document.getElementById('closeBtn');
const letter = document.getElementById('modalTitle');

open.addEventListener("click", () => {
    modal.classList.toggle('modal');
    letter.innerHTML= "Welcome to modal box"

});

close.addEventListener("click", () => {
    modal.classList.toggle('modal');
});



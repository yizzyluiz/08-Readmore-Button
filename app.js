const contentTwo = document.querySelector('.content-container-2');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  contentTwo.classList.toggle('toggle');
})
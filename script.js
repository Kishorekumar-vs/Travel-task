const travel = document.getElementById('travel');
const navLinks = document.getElementById('navLinks');
const  button = document.getElementsByName('button');

travel.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
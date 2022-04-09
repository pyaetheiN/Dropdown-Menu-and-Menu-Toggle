// Bedimcode 10min

const navMenu = document.getElementById('nav-menu'),
navList = document.getElementById('nav-list');

navMenu.addEventListener('click', () => {
  navList.classList.toggle('show-menu');
  navMenu.classList.toggle('uil-multiply');
});


// Bedimcode 11:30min






// ===== test ===== \\
const navLink = document.querySelectorAll('.nav__link');

navLink.forEach(n => n.addEventListener('click', () => {
  n.classList.toggle('active');

  const dropdownContainer = n.nextElementSibling;
  
  if (n.classList.contains('active')) {
    dropdownContainer.classList.add('active');
  } else {
    dropdownContainer.classList.remove('active');
  }
}))
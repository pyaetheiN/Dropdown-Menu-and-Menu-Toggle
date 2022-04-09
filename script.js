// Bedimcode 10min

const navMenu = document.getElementById('nav-menu'),
navList = document.getElementById('nav-list');

navMenu.addEventListener('click', () => {
  navList.classList.toggle('show-menu');
  navMenu.classList.toggle('uil-multiply');
});


// Bedimcode 11:30min

// const dropdown = document.querySelectorAll('.dropdown'),
// dropdownContainer = document.querySelectorAll('.dropdown__container');

// function linkAction() {
//   dropdownContainer.forEach(n => n.classList.remove('active'));
//   this.classList.add('active');
// }

// dropdown.forEach(n => n.addEventListener('click', linkAction));

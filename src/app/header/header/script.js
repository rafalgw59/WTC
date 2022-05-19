const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('.header__links__login')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
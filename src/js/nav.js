const primaryNav = document.querySelector('.primary-navigation')
const navToggle = document.querySelector('.mobile-nav-toggle')

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible')
  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', true)
    navToggle.setAttribute('aria-expanded', true)
  } else {
    primaryNav.setAttribute('data-visible', false)
    navToggle.setAttribute('aria-expanded', false)
  }
})

const phoneNumber = document.querySelector('.mobile-phone')
phoneNumber.addEventListener('click', () => {
  window.open(`tel:${89017066270}`, '_self')
})

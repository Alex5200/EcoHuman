let lungs = document.getElementById('lungs')
let modal = document.querySelector('.modal')
let closeBtn = document.querySelector('.close')
const title = document.querySelector('.svg-block-title')
let modalContent = document.querySelector('modal-content')

// Функция для отображения модального окна
function showModal() {
  modal.style.display = 'block'
}

// Функция для скрытия модального окна
function closeModal() {
  modal.style.display = 'none'
}
function showtitle() {
  title.style.display = 'block'
}

function closetitle() {
  title.style.display = 'none'
}

// Обработчик события для нажатия на элемент SVG
lungs.addEventListener('click', showModal)

// Обработчик события для нажатия на кнопку закрытия модального окна
closeBtn.addEventListener('click', closeModal)

// Обработчик события для нажатия на элемент SVG
lungs.addEventListener('click', showtitle)

// Обработчик события для нажатия на кнопку закрытия модального окна
closeBtn.addEventListener('click', closetitle)

// Закрываем модальное окно при клике вне его области
window.addEventListener('click', function (event) {
  if (event.target === modal) {
    closeModal()
    closetitle()
  }
})

lungs.addEventListener('click', function () {
  // Перематываем экран пользователя к модальному окну
  modal.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
})

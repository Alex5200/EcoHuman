let modal = document.querySelector('.modal');
let closeBtn = document.querySelector('.close');
const title = document.querySelector('.svg-block-title');
let content = document.querySelector('.content');
let lungs = document.getElementById('lungs');
let pagination = document.querySelector('.pagination');
let currentPage = 1;


let pages = [
  "Все знают, что табачный дым, загрязненный воздух и бытовая пыль вредят легким. Однако часто о других факторах риска, способных не просто вызывать временные проблемы, но и приводить к необратимым повреждениям легочной ткани, люди не задумываются или просто не знают. ",
  "К аллергическому поражению легких приводят и другие факторы. Например, вызвать болезнь могут тараканы. Их фекалии и частички тел превращаются в пыль и после оседают в легких, вызывая раздражение. В тяжелых случаях постоянный контакт с такими частичками может спровоцировать развитие астмы.",
  "Основным фактором развития рака легких считается курение. А вот на втором месте находится действие радона. По данным The Journal of Environmental Radioactivity, ежегодно именно этот газ вызывает около 21 000 смертей от рака легких. А по данным Всемирной организации здравоохранения, с ним связано 3-14% всех случаев этого заболевания."
];

function showModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

function showtitle() {
  title.style.display = 'block';
}

function closetitle() {
  title.style.display = 'none';
}

function updateContent() {
  content.textContent = pages[currentPage - 1];

}

lungs.addEventListener('click', function () {
  showModal();
  showtitle();
  updateContent();
});

closeBtn.addEventListener('click', function () {
  closeModal();
  closetitle();
});

window.addEventListener('click', function (event) {
  if (event.target === modal) {
    closeModal();
    closetitle();
  }
});

pagination.addEventListener('click', function (event) {
  if (event.target.classList.contains('prev') && currentPage > 1) {
    currentPage--;
    updateContent();
  } else if (event.target.classList.contains('next') && currentPage < pages.length) {
    currentPage++;
    updateContent();
  }

});


document.addEventListener('DOMContentLoaded', function () {
  ["lungs", "stomach", "liver", "heart", "intestines", "kidneys", "brain"].forEach(function (organId) {
    var organ = document.getElementById(organId);
    if (organ) {
      organ.addEventListener('mouseover', function () {
        organ.style.transition = 'opacity 0.5s';
        organ.style.opacity = '0';
      });

      organ.addEventListener('mouseout', function () {
        organ.style.transition = 'opacity 0.5s';
        organ.style.opacity = '1';
      });
    }
  });
});
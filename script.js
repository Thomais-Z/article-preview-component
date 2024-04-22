const btnShare = document.querySelector('.share-btn-a');
const btnColor = document.querySelector('.share-btn');
const shareBox = document.querySelector('.share-box');
const shareContainer = document.querySelector('.share-container');

btnShare.addEventListener('click', function (e) {
  e.preventDefault();
  shareBox.classList.toggle('hidden');
  if (shareBox.classList.contains('hidden')) {
    btnShare.style.backgroundColor = 'var(--lightest-gray)';
    btnColor.style.fill = 'var(--dark-gray)';
  } else {
    btnShare.style.backgroundColor = 'var(--dark-gray)';
    btnColor.style.fill = 'var(--white)';
    btnShare.style.transition = '0.3s';
    // shareContainer.style.display = 'flex';
  }
});

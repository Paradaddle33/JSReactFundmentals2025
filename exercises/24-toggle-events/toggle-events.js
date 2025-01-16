document.addEventListener('DOMContentLoaded', function() {

  // Problem 1: Dismiss "Accept Cookies" Popup
  const acceptCookiesButton = document.getElementById('acceptCookiesButton');
  const acceptCookiesPopup = document.getElementById('acceptCookiesPopup');

  acceptCookiesButton.addEventListener('click', function() {
    acceptCookiesPopup.style.display = 'none';
  });

  // Problem 2: Toggle Comments Section
  const toggleCommentsButton = document.getElementById('toggleComments');
  const commentsSection = document.getElementById('comments');

  toggleCommentsButton.addEventListener('click', function() {
    if (commentsSection.classList.contains('hidden')) {
      commentsSection.classList.remove('hidden');
      toggleCommentsButton.textContent = 'Hide Comments';
    } else {
      commentsSection.classList.add('hidden');
      toggleCommentsButton.textContent = 'View Comments';
    }
  });
});

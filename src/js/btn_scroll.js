// Function to scroll up
const button = document.querySelector('.up_btn');

// Display the button when the user has scrolled the page more than 500 pixels
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 500) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
}); 
 
// Scroll the page to the top by clicking
button.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
  });
});

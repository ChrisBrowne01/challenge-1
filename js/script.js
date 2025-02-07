// Function to hide and show mobile menu
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
  
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  });

// Get data for modal
const modal = document.getElementById('boxModal');
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const url = document.getElementById("urlCap");
const images = document.querySelectorAll(".thumbImg")
let urlLink, urlText;
images.forEach(img => {
  img.addEventListener("click", function() {
    modal.style.display = "block";
    modalImg.src = this.querySelector('img').src;
    urlText = this.querySelector('img').alt;
    urlLink = this.querySelector('img').getAttribute('data-url');
    if (urlLink && urlText) {
      captionText.innerHTML = `<a href="${urlLink}">${urlText}</a>`;
    } else if (urlText) {
      captionText.innerHTML = urlText;
    }
  });
});
  
// Close modal when clicking the close button
const close = document.querySelector(".close");
if (close) {
  close.addEventListener("click", function() {
    modal.style.display = "none";
  });
}

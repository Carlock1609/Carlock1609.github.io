// Scrolling affects
ScrollReveal().reveal('#profile-img', { delay: 100 });
ScrollReveal().reveal('#caption', { interval: 200 });
ScrollReveal().reveal('#summary', { delay: 300 });
ScrollReveal().reveal('#credentials', { delay: 300 });


// MODAL
// Get the modal
let modal = document.querySelector("#myModal");
// Get the image
let images = document.querySelectorAll("#myImg");
for(let i=0; i<images.length; i++) {
  images[i].addEventListener("click", function() {
    images.id = "myImg"
    modal.style.display = "block";
    modalImg.src = this.src;
  })
}
// BUG THIS GOES WITH THE MODAL
let modalImg = document.querySelector("#img01");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
span.addEventListener('click', function() {
  modal.style.display = "none";
}) 


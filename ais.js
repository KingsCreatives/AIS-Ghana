let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

/*Testimony slides*/

let testimonyIndex = 0;
showTesimonySlides();

function showTesimonySlides() {
  let i;
  let testimonySlides = document.getElementsByClassName("testimony")
  let dots = document.getElementsByClassName("dots");
  for (i = 0; i < testimonySlides.length; i++) {
    testimonySlides[i].style.display = "none";
}

testimonyIndex++;
  if (testimonyIndex > testimonySlides.length) {testimonyIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  testimonySlides[testimonyIndex-1].style.display = "block";  
  dots[testimonyIndex-1].className += " active";
  setTimeout(showTesimonySlides, 2000);


}



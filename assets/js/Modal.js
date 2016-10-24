function openModal(mySlides) {
    console.log("openModal", mySlides, slideIndex);
    document.getElementById(mySlides+'Modal').style.display = "block"; 
    document.getElementById('navbar').style.opacity = "0.3";
    slideIndex = 1;
    showSlides(1, mySlides);
 }

function closeModal(myModal) {
    document.getElementById(myModal).style.display = "none";
}
console.log('out of function');
var slideIndex = 1;
showSlides(slideIndex, mySlides);

function plusSlides(n, mySlides) {
    console.log("plusSlides", mySlides, n);
    showSlides((slideIndex += n), mySlides);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n, mySlides) {
    console.log("Begin of showSlides", mySlides, n, i);
    var i;
    var slides = document.getElementsByClassName(mySlides);
    //var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    console.log("befor for loop", mySlides, slideIndex);

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //for (i = 0; i < dots.length; i++) {
    //    dots[i].className = dots[i].className.replace(" active", "");
    //}
    slides[slideIndex - 1].style.display = "block";
    //dots[slideIndex - 1].className += " active";
//    captionText.innerHTML = dots[slideIndex - 1].alt;
}

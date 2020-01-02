function desktop(x) {
    if (x.matches) {
        
        window.onscroll = function() {myFunction()};

        var header = document.getElementById("mainNav");
        var accounts = document.getElementById("accountNav"); 
            
        function myFunction() {

            if (window.pageYOffset > 32) {
                header.classList.add("sticky");
                accounts.classList.add("hide-nav");
            } else {
                header.classList.remove("sticky");
                accounts.classList.remove("hide-nav");
            }
        }
    }

    else {
        window.onscroll = function() {noFade()};
        var header = document.getElementById("mainNav");
        function noFade () {
            header.classList.remove("sticky");
            }
    }
}

var x = window.matchMedia("(min-width: 770px)");
desktop(x);
x.addListener(desktop);


const navDrop = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.burger-nav');

    burger.addEventListener('click', () => {
        nav.classList.toggle('burger-nav-active');
    }
    
    )
    nav.addEventListener('click', () => {
      nav.classList.toggle('burger-nav-active');
  }
  
  )

}

navDrop();


        const questionAnswer = () => {
    const Q1 = document.querySelector('.q1');
    const q1 = document.querySelector('.q-1');
    const a1 = document.querySelector('.a-1');

    const Q2 = document.querySelector('.q2');
    const q2 = document.querySelector('.q-2');
    const a2 = document.querySelector('.a-2');

    const Q3 = document.querySelector('.q3');
    const q3 = document.querySelector('.q-3');
    const a3 = document.querySelector('.a-3');

    const Q4 = document.querySelector('.q4');
    const q4 = document.querySelector('.q-4');
    const a4 = document.querySelector('.a-4');

    Q1.addEventListener('click', () => {
        Q1.classList.toggle('question-red');
        Q1.classList.toggle('answer-red');
        q1.classList.toggle('dn');
        a1.classList.toggle('dn');
    })

    Q2.addEventListener('click', () => {
        Q2.classList.toggle('question-red');
        Q2.classList.toggle('answer-red');
        q2.classList.toggle('dn');
        a2.classList.toggle('dn');
    })

    Q3.addEventListener('click', () => {
        Q3.classList.toggle('question-red');
        Q3.classList.toggle('answer-red');
        q3.classList.toggle('dn');
        a3.classList.toggle('dn');
    })

    Q4.addEventListener('click', () => {
        Q4.classList.toggle('question-red');
        Q4.classList.toggle('answer-red');
        q4.classList.toggle('dn');
        a4.classList.toggle('dn');
    })
}

questionAnswer();

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

const keyToggle = () => {
    document.addEventListener('keydown', (e) => {
    if (e.code === "ArrowLeft")  {plusSlides(-1)}
  else if (e.code === "ArrowRight") {plusSlides(1)}
})}

keyToggle();

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

var timer = setInterval(plusSlides,7000, 1);
var pauseButton = document.querySelector(".pause");
var playing = true;

function pausePlaySlideshow(){
    if (playing) {
	pauseButton.innerHTML = '&#9658';
	playing = false;
    clearInterval(timer);
    }
    else {
        pauseButton.innerHTML = '&#10074;&#10074;';
        playing = true;
        timer =
        setInterval(plusSlides,7000, 1);
    }
}
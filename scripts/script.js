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

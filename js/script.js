var GoToNext = document.getElementById('next-opis-box');
        var text1 = document.getElementById('opis-1');
        var text2 = document.getElementById('opis-2');
        var text3 = document.getElementById('opis-3');
        var text4 = document.getElementById('opis-4');

        text1.onclick = function(){
            GoToNext.style.transform = 'translateX(0%)';
        }

        text2.onclick = function(){
            GoToNext.style.transform = 'translateX(-25.3%)';
        }

        text3.onclick = function(){
            GoToNext.style.transform = 'translateX(-50.75%)';
        }

        text4.onclick = function(){
            GoToNext.style.transform = 'translateX(-76.3%)';
        };


let SeeMore = document.querySelector("#semore");
let procjbx = 3;
        
    SeeMore.onclick = () => {
        let boxes = [...document.querySelectorAll('.projects-place .projec-cont .project-card')];
        for (var i = procjbx; i < procjbx + 3; i++) {
        boxes[i].style.display = "inline-flex";
        }
        
        procjbx += 3;
            
    };

window.addEventListener("scroll", function() {
    var header = document.getElementById("header");
    var scrollPosition = window.scrollY;
    
        if (scrollPosition > 100) {
            header.classList.add("h-w-dl");
        } else {
                header.classList.remove("h-w-dl");
        }
    });


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
    
    
const hiddenEle = document.querySelectorAll('.hidden');
hiddenEle.forEach((el) => observer.observe(el))
    
    
const Secoundobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show-fast');
        } else {
            entry.target.classList.remove('show-fast');
        }
    });
});

const hiddenElesecend = document.querySelectorAll('.hidden-fast');
hiddenElesecend.forEach((el) => Secoundobserver.observe(el));

const thirdbserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show-top');
        } else {
            entry.target.classList.remove('show-top');
        }
    });
});

const hiddenElthird = document.querySelectorAll('.hidden-top');
hiddenElthird.forEach((el) => thirdbserver.observe(el));
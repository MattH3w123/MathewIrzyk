var lastScrollTop = 0;
            navbar = document.getElementById("header")
        window.addEventListener("scroll", function(){
            var scrollTop = window.pageYOffset || document
                .documentElement.scrollTop;
            if (scrollTop > lastScrollTop){
                navbar.style.top="-60px";
            } else {
                navbar.style.top="0";
            }
            lastScrollTop = scrollTop;
        });

var Music = document.getElementById("music");
var MusicButton = document.getElementById("music-button");

    MusicButton.onclick = function(){
        if(Music.paused){
            Music.play();
            MusicButton.style = "opacity: 1;"
        }else{
            Music.pause();
            MusicButton.style = "opacity: .6;"
        }
    }

    var audio = document.getElementById("music");
    audio.volume = 0.6;


    var GoDown = document.getElementById('go-down');
    var text1 = document.getElementById('text1');
    var text2 = document.getElementById('text2');

    text1.onclick = function(){
        GoDown.style.transform = 'translateY(0)';
    }

    text2.onclick = function(){
        GoDown.style.transform = 'translateY(-54%)';
    };


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
    hiddenEle.forEach((el) => observer.observe(el));

    document.addEventListener("DOMContentLoaded", function() {
        const welcomeScreen = document.getElementById("hello");
        
        setTimeout(function() {
            welcomeScreen.style.display = "none";
        }, 2000); 
    });
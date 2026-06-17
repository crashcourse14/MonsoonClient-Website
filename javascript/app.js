let images = document.querySelectorAll(".carousel img");
let index = 0;

function showImage(i){
    images.forEach(img => img.classList.remove("active"));
    images[i].classList.add("active");
}

function nextImg(){
    index = (index + 1) % images.length;
    showImage(index);
}

function prevImg(){
    index = (index - 1 + images.length) % images.length;
    showImage(index);
}

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.15 });

sections.forEach(sec => observer.observe(sec));

function open2ndLink() {
    window.open("https://stt.gg/FG6tXX0q");
}

function openSocials() {
    alert("There's 2 social links. You may need enable pop-ups for both tabs to open.")
    window.open("https://fluxer.gg/qfHZffiR");
    
    open2ndLink()
}
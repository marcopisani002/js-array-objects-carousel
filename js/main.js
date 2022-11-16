const images = [ {
   img: 'img/01.webp',
    title: 'Marvel\'s Spiderman Miles Morale',
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
}, {
   img: 'img/03.webp',
    title: 'Fortnite',
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
}, {
   img: 'img/04.webp',
    title: 'Stray',
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
}, {
   img: 'img/05.webp',
    title: "Marvel's Avengers",
    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
}
];

let itemActive = document.getElementById('active');
let thumbContainer = document.getElementById('thumbContainer');
let items = document.getElementsByClassName('items');
const itemsContainer = document.getElementById('items-container');
const thumbnails = document.getElementsByClassName('thumbnail');

let buttonStop = document.getElementById('stop').addEventListener('click', stop);
function stop() {
    clearInterval(myInterval);
}

let buttonPlay = document.getElementById('play').addEventListener('click', play);
function play() {
    myInterval = setInterval(next, 4000);
}

let prevButton = document.getElementById('prevButton').addEventListener('click', prev);
function prev() {
    if (currentIndex > 0) {
        thumbnails[currentIndex].classList.remove("active");
        items[currentIndex].classList.add("d-none");
        items[currentIndex].classList.remove("active");
        currentIndex--;
        thumbnails[currentIndex].classList.add("active");
        items[currentIndex].classList.remove("d-none");
        items[currentIndex].classList.add("active");
    }
}
let nextButton = document.getElementById('nextButton').addEventListener("click", next);
function next() {
    thumbnails[currentIndex].classList.remove("active");
    items[currentIndex].classList.remove("active");
    if (currentIndex === 4) {
        currentIndex = 0;
        items[currentIndex].classList.remove("d-none");
        items[currentIndex].classList.add("active");
    } else {
        currentIndex++;
        items[currentIndex].classList.remove("d-none");
        items[currentIndex].classList.add("active");
    }
    thumbnails[currentIndex].classList.add("active");
};

let currentIndex = 0;
for (let i = 0; i < images.length; i++) {
    let classActive = "";
    if (i === currentIndex) {
        classActive = "active"
    }
    itemsContainer.innerHTML += `<div class="items ${classActive} ">
                                   <img  src="${images[i].img}">
                                    <div class="title">
                                        <h2 class="h2">${images[i].title}</h2>
                                        <p class="text">${images[i].text}.</p>
                                    </div>
                                </div>`


    thumbContainer.innerHTML += `<div class= "thumbnail ${classActive}">
                                   <img class="w-100" src = "${images[i].img }">
                                 </div>`

}
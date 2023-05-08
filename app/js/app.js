function viewDiv(){
    document.getElementById('button-hidden-on').classList.toggle('hidden');
};


const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    effect: 'fade',

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


const targetBrand = document.getElementById('brands-content');

targetBrand.addEventListener('click', function selectBrand(event) {

    const ACTIVE_CLASS = 'brands_selection';

    let activeButton = this.querySelectorAll(`.${ACTIVE_CLASS}`);

    Array.prototype.forEach.call(activeButton, function(element) {
        if (element) {
            element.classList.remove(ACTIVE_CLASS);
        }
    });

    const button = event.target;
    let buttonToActivate;

    if ( button.classList.contains('brands__wrapper') ) {
        buttonToActivate = button;
    } else if ( button.classList.contains('brands__img') ) {
        buttonToActivate = button.parentNode;
    }

    buttonToActivate.classList.add(ACTIVE_CLASS);
    
});


const video = document.getElementById('video');
const btnVideo = document.getElementById('btn-video');
const videoWrap = document.getElementById('video-wrap')
const btnCloseVideo = document.getElementById('close-video');

btnVideo.addEventListener('click', function() {
    videoWrap.style.display = 'flex';
    videoWrap.focus();
    var scrollX = window.scrollX;
    var scrollY = window.scrollY;
    window.onscroll = function () { window.scrollTo(scrollX, scrollY); };
});

btnCloseVideo.addEventListener('click', function() {
    videoWrap.style.display = 'none';
    window.onscroll = function () { return; };
    video.src = 'https://www.youtube.com/embed/fAca6Z5SaZY';
});

videoWrap.addEventListener('keydown', function(e) {
    if (e.code == 'Escape') {
        videoWrap.style.display = 'none';
        window.onscroll = function () { return; };
        video.src = 'https://www.youtube.com/embed/fAca6Z5SaZY';
    } else if (e.key == 'Tab' && e.shiftKey) {
        video.focus();
        return false;
    }
});


const anchors = document.getElementsByClassName('js-header-link');

Array.prototype.forEach.call(anchors, function(element) {

    let anchorID = element.getAttribute('href').substr(1);
    let anchorElement = document.getElementById(anchorID);

    element.addEventListener('click', function(e) {
        e.preventDefault();
        anchorElement.scrollIntoView({behavior: 'smooth'});
    });
    
});


const inputSubscriber = document.getElementById('subscriber-name');
const form = document.getElementById('form');
let subscriberName;

inputSubscriber.addEventListener('change', function() {
    subscriberName = inputSubscriber.value;
});

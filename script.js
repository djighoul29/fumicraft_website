/*
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
*/

var color = 'rgba(0,0,0,0.65)';
var menu_obj = $('.fixed-top');
var drop_obj = $('#navbarMain');
var lock = false;

/*
registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});
*/

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 64 && lock == false){
        menu_obj.css('background', 'transparent');
        drop_obj.css('background', 'transparent');
    } else if (scroll < 64 && lock == true) {
        menu_obj.css('background', color);
        drop_obj.css('background', color);
    } else {
        menu_obj.css('background', color);
    }
});

$(".navbar-toggler").click(function() {
    if (lock == false) {
        menu_obj.css('background', color);
        drop_obj.css('background', color);
        lock = true;
    }else if(lock == true && $(window).scrollTop() < 64) {
        menu_obj.css('background', 'transparent');
        drop_obj.css('background', 'transparent');
        lock = false;
    }
});
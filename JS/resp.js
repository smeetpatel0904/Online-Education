burgar = document.querySelector('.burgar');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.nav-list');
rightnav= document.querySelector('.right-nav');

burgar.addEventListener('click', ()=>{
    navlist.classList.toggle('visibility-class');
    rightnav.classList.toggle('visibility-class');
    navbar.classList.toggle('height-nav');
})
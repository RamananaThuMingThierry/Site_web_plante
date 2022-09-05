/*============= Show Menu ================*/
const navMenu = document.getElementById('nav-menu'),
     navToggle = document.getElementById('nav-toogle'),
     navClose = document.getElementById('nav-close');

/*=========== MENU SHOW ====================*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
}

/*========== MENU HIDDEN ================== */
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
}

/*============= REMOVE MENU MOBILE =============*/
const NavLink = document.querySelectorAll('.nav_link');


function linkAction(){
    const navMenu = document.getElementById('nav-menu');

    // Quand on clique sur chauqe nav_link, nous supprimons le show-menu
    navMenu.classList.remove('show-menu'); 
}

NavLink.forEach(n => n.addEventListener('click', linkAction));
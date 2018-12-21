// const menuBtn = document.querySelector('.menu-btn');
// const menu = document.querySelector('.menu');
// const menuNav = document.querySelector('.menu-nav');
// const navItems = document.querySelectorAll('.nav-item');

// // Set Initial State Of Menu
// let showMenu = false;

// menuBtn.addEventListener('click', toggleMenu);

// function toggleMenu() {
//     console.log('helo');
//   if (!showMenu) {
    
//     menu.classList.add('show');
//     menuNav.classList.add('show');
//     navItems.forEach(item => item.classList.add('show'));

//     // Set Menu State
//     showMenu = true;
//   } else {
    
//     menu.classList.remove('show');
//     menuNav.classList.remove('show');
//     navItems.forEach(item => item.classList.remove('show'));

//     // Set Menu State
//     showMenu = false;
//   }
// };

var myDiv = document.getElementById("text");
function scrolled() {
    
    if (window.pageYOffset < 100) {
        myDiv.style.opacity = 1;
    } else {
        myDiv.style.opacity = 0.3;
    }
}

var elem = document.getElementById("text");
function fadeOut(el){
	if (window.pageYOffset < 50){
	elem.style.transition = "opacity 0.5s linear 0s";
    elem.style.opacity = 0;
    }else{elem.style.transition = "opacity 0.5s linear 0s";
	elem.style.opacity = 1;}
}

	
	

window.addEventListener('scroll', scrolled);

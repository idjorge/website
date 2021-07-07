/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('menu-btn'),
    closeMenu = document.getElementById('close-btn')

// SHOW
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

// HIDDEN
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*===== MOUSEMOVE HOME IMG =====*/
document.addEventListener('mousemove', move);
function move(e){
    this.querySelectorAll('.move').forEach(layer =>{
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/120
        const y = (window.innerHeight - e.pageY*speed)/120

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

/*===== GSAP ANIMATION =====*/
// NAV

gsap.from('.logo', {opacity: 0, duration: 1, delay:1.6, y: 10})
gsap.from('.wrapper', {opacity: 0, duration: 1, delay:1.8, y: 10})
/*gsap.from('.megabox', {opacity: 0, duration: 1, delay:2.1, y: 30})
gsap.from('.desktop-items', {opacity: 0, duration: 1, delay:1.3, y: 30})*/


// HOME
gsap.from('.home-content', {opacity: 0, duration: 1, delay:1.6, y: 30})
/*gsap.from('.max-widht', {opacity: 0, duration: 1, delay:1.8, y: 30})*/
/*gsap.from('.home-content', {opacity: 0, duration: 1, delay:2.1, y: 30})*/
/*gsap.from('.home__img', {opacity: 0, duration: 1, delay:1.3, y: 30})*/


  
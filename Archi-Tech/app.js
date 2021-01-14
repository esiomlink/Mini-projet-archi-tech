// humberger


const btn = document.querySelector('.btn1');

btn.addEventListener('click', presentation)

function presentation(){

    btn.classList.toggle('active')
}

const menu = document.querySelector('.liste-nav');
const btnMenu = document.querySelector('.cont-lignes.btn1');

btnMenu.addEventListener('click', function(){
    menu.classList.toggle('active-menu')
})
// ----------------------

const card = $(".perspective__3d");

$("body").on("mousemove", function(t){
let vertical = -($(window).innerWidth() / 2 - t.pageX) / 70,
    horizontal = ($(window).innerHeight() / 2 - t.pageY) / 70;

    card.attr("style","transform: rotateY(" + vertical + "deg)rotateX("+ horizontal + "deg)")
    
});

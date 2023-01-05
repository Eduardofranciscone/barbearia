let menu = document.querySelector('#menu-icon')
let navlist= document.querySelector('.navlist')

menu.onclick= () =>{
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('open')
 
}

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        620:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

var swiper=new Swiper(".mySwiper-1",{
    slidesPerView:1,
    spaceBetween:30,
    loop:true,
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    navigation:{
        nextEl:".swipper-button-next",
        prevEl:".swipper-button-prev"
    }
});
/************************************************************************** */
var swiper=new Swiper(".mySwiper-2",{
    slidesPerView:1,
    spaceBetween:30,
    loop:true,
    navigation:{
        nextEl:".swipper-button-next",
        prevEl:".swipper-button-prev"
    },
    0:{
        slidesPerView:1
    },
    520:{
        slidesPerView:2
    },
    950:{
        slidesPerView:3
    }
});
/******************************************carrito*******************************************/ 

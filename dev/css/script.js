$('.burger-btn').on('click',function(){ 

    $('.burger-btn').toggleClass('cross'); 
    $('.header nav').fadeToggle(300); 
    $('body').toggleClass('noscroll') 
});

// gsap-home
const items = gsap.utils.toArray('.js-anime');
items.forEach((item) => {
    gsap.fromTo(item,
        {y: 30,
        opacity:0},
        {y: 0,duration: 2,ease: 'power2.out',opacity:1,
        scrollTrigger: {
            trigger:  item,
            start: 'top center',
            onEnter: () => item.classList.add('is-active'),
            onLeaveBack: () => item.classList.remove('is-active'),
            // markers: true
        }
    }
    );
});


// gsap-aboutus
const abouts = gsap.utils.toArray('.js-anime-about');
abouts.forEach((about) => {
    gsap.fromTo(about,
        {y: 30,
        opacity:0},
        {y: 0,duration: 2,ease: 'power2.out',opacity:1,
        scrollTrigger: {
            trigger:  about,
            start: 'top center',
            onEnter: () => item.classList.add('is-active'),
            onLeaveBack: () => item.classList.remove('is-active'),
            // markers: true
        }
        }
    );
});


// gsap news animation
gsap.from(".js-item",{
    opacity: 0,
    y: "30%",
    stagger: 0.3,
    ease: "Power4.easeOut",
    duration: 2,
})

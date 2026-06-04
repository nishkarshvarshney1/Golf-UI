gsap.to('nav', {
    backgroundColor: 'black',
    height: '100px',
    scrollTrigger: {
        trigger: 'nav',
        scroller: 'body',
        start: 'top -10%',
        end: 'top -11%',
        scrub: 1
    }
})

gsap.to('main', {
    backgroundColor: 'black',
    scrollTrigger: {
        trigger: 'main',
        scroller: 'body',
        start: 'top -10%',
        end: 'top -80%',
        scrub: 2
    }
})

var crsr = document.querySelector('.cursor')
var blur = document.querySelector('.cursor-blur')

document.addEventListener('mousemove', function (dets) {
    crsr.style.top = dets.y - 11 + 'px'; // 11 comes from half of its width and height.
    crsr.style.left = dets.x - 11 + 'px';
    blur.style.top = dets.y - 200 + 'px'; // 150 comes from half of its width and height.
    blur.style.left = dets.x - 200 + 'px';
})

var allh4 = document.querySelectorAll('a');

allh4.forEach(function(elem){
    elem.addEventListener('mouseenter', function(){
        crsr.style.transform = 'scale(3)'
        crsr.style.border = '1px solid #fff'
        crsr.style.backgroundColor = 'transparent'
        crsr.style.transition = 'transform 0.3s, border 0.3s, background-color 0.3s'
    })
    elem.addEventListener('mouseleave', function(){
        crsr.style.transform = 'scale(1)'
        crsr.style.border = 'none'
        crsr.style.backgroundColor = '#95C11E'
        // crsr.style.transitionDuration = '0s'
    })
})

var allh4 = document.querySelectorAll('button');

allh4.forEach(function(elem){
    elem.addEventListener('mouseenter', function(){
        crsr.style.transform = 'scale(3)'
        crsr.style.border = '1px solid #fff'
        crsr.style.backgroundColor = 'transparent'
        crsr.style.transition = 'transform 0.3s, border 0.3s, background-color 0.3s'
    })
    elem.addEventListener('mouseleave', function(){
        crsr.style.transform = 'scale(1)'
        crsr.style.border = 'none'
        crsr.style.backgroundColor = '#95C11E'
    })
})

var allh4 = document.querySelectorAll('.what-same');

allh4.forEach(function(elem){
    elem.addEventListener('mouseenter', function(){
        crsr.style.transform = 'scale(3)'
        crsr.style.border = '1px solid #fff'
        crsr.style.backgroundColor = 'transparent'
        crsr.style.transition = 'transform 0.3s, border 0.3s, background-color 0.3s'
    })
    elem.addEventListener('mouseleave', function(){
        crsr.style.transform = 'scale(1)'
        crsr.style.border = 'none'
        crsr.style.backgroundColor = '#95C11E'
    })
})

var allh4 = document.querySelectorAll('.card');

allh4.forEach(function(elem){
    elem.addEventListener('mouseenter', function(){
        crsr.style.transform = 'scale(3)'
        crsr.style.border = '1px solid #fff'
        crsr.style.backgroundColor = 'transparent'
        crsr.style.transition = 'transform 0.3s, border 0.3s, background-color 0.3s'
    })
    elem.addEventListener('mouseleave', function(){
        crsr.style.transform = 'scale(1)'
        crsr.style.border = 'none'
        crsr.style.backgroundColor = '#95C11E'
    })
})

gsap.from('.about-us', {
    y: 50,
    opacity: 0,
    scrollTrigger: {
        trigger: '.about-us',
        scroller: 'body',
        start: 'top 60%',
        end: 'top 58%',
        scrub: 4
    }
})

gsap.from('.cards .card', {
    y: 50,
    opacity: 0,
    // stagger: 1.4,
    scrollTrigger: {
        trigger: '.cards',
        scroller: 'body',
        // markers: true,
        start: 'top 80%',
        end: 'top 78%',
        scrub: 4
    }
})

gsap.from('#colon1', {
    y: -40,
    x: -40,
    scrollTrigger: {
        scroller: 'body',
        trigger: '#colon1',
        // markers: true,
        start: 'top 55%',
        end: 'top 53%',
        scrub: 4
    }
})

gsap.from('#colon2', {
    y: 40,
    x: 40,
    scrollTrigger: {
        scroller: 'body',
        trigger: '#colon1',
        // markers: true,
        start: 'top 55%',
        end: 'top 53%',
        scrub: 4
    }
})

gsap.from('.what p', {
    y: 50,
    scrollTrigger: {
        scroller: 'body',
        trigger: '.what',
        start: 'top 90%',
        end: 'top 88%',
        scrub: 3
    }
})
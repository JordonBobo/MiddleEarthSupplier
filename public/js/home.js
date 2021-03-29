$(document).ready(() => {

  //https://cdnjs.com/libraries/gsap
const tl = gsap.timeline( {defaults: {ease: 'power1.out'} })


tl.fromTo('.shroudImg', {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo('.shroudText', {opacity: 0}, {opacity: 1, duration: 2, delay: 1, stagger: 1});
tl.fromTo('.shroud', {opacity: 1}, {opacity: 0, duration: 1, delay: 1} );
tl.to('.shroud', {x:'-100%'} );





});
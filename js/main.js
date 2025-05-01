// top_button
const topBnt = document.querySelector('.top_button');
const topBntoffset = topBnt.offsetTop;

window.addEventListener('scroll',function(){
    let scrollAmt = window.scrollY;
    if(scrollAmt > topBntoffset){
        topBnt.classList.add('btn');
    }else{
        topBnt.classList.remove('btn');
    }
})
// /top button
// top_button
const topBnt = document.querySelector('.top_button');
const topBntoffset = topBnt.offsetTop;

window.addEventListener('scroll',()=>{
    let scrollAmt = window.scrollY;
    if(scrollAmt > topBntoffset){
        topBnt.classList.add('btn');
    }else{
        topBnt.classList.remove('btn');
    }
})
topBnt.addEventListener('click',(e)=>{
    e.preventDefault();
    window.scrollTo({
        left:0,top:0,behavior:"smooth"
    })
})
// /top button
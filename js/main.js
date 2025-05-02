// top_button
const topBnt = document.querySelector('.top_button');
const topBntoffset = topBnt.offsetTop;


window.addEventListener('scroll',()=>{
    
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




// 메인슬라이드
const m_slides = document.querySelectorAll('.main_slide .mainslide-wrapper ul li');
const m_slidesCount = m_slides.length;
const slideWrapper =document.querySelector('.mainslide-wrapper');
const slideGageBar = document.querySelector('.slide_gagebar');
const currentCount = document.querySelector('.slide_gagebar .current-slide');
let statusCount = 1;
let m_currentIdx = 0;

let autofade;
function autoFadeSlide(){
   autoFade = setInterval(function(){

        let nextIdx = (m_currentIdx + 1) % m_slidesCount;

        m_slides[m_currentIdx].classList.remove('active');
        m_slides[nextIdx].classList.add('active');
        m_currentIdx = nextIdx;

        currentCount.innerHTML = '0'+(m_currentIdx+1);

    },4000);

}

autoFadeSlide();

//slidewrapper에 마우스 올렸을때 stop

slideWrapper.addEventListener('mouserover',()=>{
 clearInterval(autofade);
});
slideWrapper.addEventListener('mouserleave',()=>{
    autoFadeSlide();
});








//  /메인슬라이드
const brandTotalWidth = document.body.offsetWidth;
const brands = document.querySelector('.brands');
const slid = brands.querySelector('ul');
const brandSlids = slid.querySelectorAll('li');
const topBnt = document.querySelector('.top_button');
const brandsOffsetTop = brands.offsetTop;
const slidewidth = 292;
// brands 무한슬라이드
/*
for(let slide of brandSlids){
    slide.style.width = brandTotalWidth + 'px';
}
    */
let slideHTML = slid.innerHTML;
console.log(slideHTML);
let clonedSlide = slideHTML.replace(/li/g,'li class="clon"');
console.log(clonedSlide);

slid.innerHTML = clonedSlide + slideHTML;

let newbrandList = slid.querySelectorAll('li');
slid.style.width =  slidewidth * newbrandList.length + 'px';

let brandLeft = 0;
let animation;
function movebrand(){
    brandLeft -= 2
    if(brandLeft < -slidewidth * newbrandList.length/2){
        brandLeft = 0;
    }
    slid.style.left = brandLeft + 'px';
    animation = requestAnimationFrame(movebrand);
}
requestAnimationFrame(movebrand);

slid.addEventListener('mouseenter',()=>{
    cancelAnimationFrame(animation);
})
slid.addEventListener('mouseleave',()=>{
    requestAnimationFrame(movebrand);
})

// /brands 무한슬라이드

// top_button


window.addEventListener('scroll',()=>{
    let scrollAmt = window.scrollY;
        if(scrollAmt > brandsOffsetTop){
            topBnt.classList.add('btn');
        }else{
            topBnt.classList.remove('btn');
        };
    })
    
topBnt.addEventListener('click',(e)=>{
    e.preventDefault();
    window.scrollTo({
        left:0,top:0,behavior:"smooth"
    });
})

// /top button




// 메인슬라이드
const m_slides = document.querySelectorAll('.main_slide .mainslide-wrapper ul li');
const m_slidesCount = m_slides.length;
const slideWrapper =document.querySelector('.mainslide-wrapper');
const slideGageBar = document.querySelector('.slide_gagebar');
const currentCount = document.querySelector('.slide_gagebar .current-slide');
const progressBar = slideGageBar.querySelector('.bar');
let m_currentIdx = 0;

let autoFade;
const slideDuration = 4000;
let progressAnimation;

function startProgressBar() {
    // 기존 애니메이션이 있다면 취소
    if (progressAnimation) progressAnimation.cancel();

    progressAnimation = progressBar.animate(
        [
            { width: '0%' },
            { width: '100%' }
        ],
        {
            duration: slideDuration,
            fill: 'forwards',
            easing: 'linear'
        }
    );
}


function autoFadeSlide(){
    
    //첫슬라이드 활성화
    m_slides[m_currentIdx].classList.add('active');
    currentCount.innerHTML = '0'+(m_currentIdx+1);

    startProgressBar();

    //순환
    autoFade = setInterval(function(){
        let nextIdx = (m_currentIdx + 1) % m_slidesCount;

        m_slides[m_currentIdx].classList.remove('active');
        m_slides[nextIdx].classList.add('active');
        m_currentIdx = nextIdx;

        
        currentCount.innerHTML = '0'+(m_currentIdx+1);

        startProgressBar()
        

    },slideDuration);

}

autoFadeSlide();

//slidewrapper에 마우스 올렸을때 stop

slideWrapper.addEventListener('mouseover',()=>{
 clearInterval(autoFade);
 if (progressAnimation) progressAnimation.pause();
});

slideWrapper.addEventListener('mouseleave',()=>{
    
    if (progressAnimation) progressAnimation.play();
    autoFadeSlide();
});








//  /메인슬라이드
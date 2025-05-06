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
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
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





// 좌우버튼

prevBtn.addEventListener('click', () => {
    clearInterval(autoFade); // 자동 슬라이드 중지
    if (progressAnimation) progressAnimation.cancel(); // 진행바 애니메이션 중지

    m_slides[m_currentIdx].classList.remove('active');
    m_currentIdx = (m_currentIdx - 1 + m_slidesCount) % m_slidesCount;
    m_slides[m_currentIdx].classList.add('active');
    currentCount.innerHTML = '0' + (m_currentIdx + 1);
    startProgressBar();


    autoFadeSlide();
});

nextBtn.addEventListener('click', () => {
    clearInterval(autoFade);
    if (progressAnimation) progressAnimation.cancel();

    m_slides[m_currentIdx].classList.remove('active');
    m_currentIdx = (m_currentIdx + 1) % m_slidesCount;
    m_slides[m_currentIdx].classList.add('active');
    currentCount.innerHTML = '0' + (m_currentIdx + 1);
    startProgressBar();

    autoFadeSlide();
});



// 헤더
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if(window.scrollY > 50){ // 50px 이상 스크롤 시
      header.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
    }
  });

// //헤더


//  /메인슬라이드


// /Nestle 소식 
// article _ ar
const list = document.querySelectorAll('.news_list ul li');
const buttons = document.querySelectorAll('.news_nav button');

buttons.forEach((button, idx) => {
    button.addEventListener('click',()=>{
        for(let l of list){
            l.classList.remove('active');
        }
        list[idx].classList.add('active');
        for(let b of buttons){
            b.classList.remove('active');
        }
        buttons[idx].classList.add('active');
        let targetClass = button.getAttribute('data-filter');
        let target = document.querySelectorAll(targetClass);
        if(targetClass === 'all'){
            target = list;
        }
        for(let i = 0; i<3; i++){
            target[i].classList.add('active');
        }
    })
});

//articl _ ar

//video play/pause _ ar
const ytVideo = document.querySelector('#yt-video');
const ytControlBtn = document.querySelector('.video button');


ytControlBtn.addEventListener('click', ()=>{
    ytControlBtn.classList.toggle('active');
    if(ytControlBtn.classList.contains('active')){
        ytVideo.play();
    }else{
        ytVideo.pause();
    }
});

ytVideo.addEventListener('click',()=>{
    ytVideo.classList.toggle('active');
    ytControlBtn.classList.toggle('active');

    if(ytVideo.classList.contains('active')){
        ytVideo.play();
    }else{
        vtVideo.pause();
    }
});

//제품소개 ym

// slide
const slideContainer = document.querySelector('.slidecontainer');
const slides = document.querySelectorAll('.slidecontainer li');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slideWidth = 320;
const activeWidth = 460;
const slideGap = 50;
const visibleCount = 3;

let currentIdx = slides.length;

// 슬라이드 복사본 생성
for(let i=0; i<slides.length; i++){
  let cloneSlide = slides[i].cloneNode(true);
  cloneSlide.classList.add('clone');
  slideContainer.append(cloneSlide);
 }
for(let i=slides.length-1; i>=0; i--){
 let cloneSlide = slides[i].cloneNode(true);
 cloneSlide.classList.add('clone');
 slideContainer.prepend(cloneSlide);
 }

const allSlides = document.querySelectorAll('.slidecontainer li');

slideContainer.style.width = allSlides.length * (slideWidth + slideGap) + 'px';

// 슬라이드 이동 함수
function moveSlide(idx) {
  const offset = (slideWidth + slideGap) * idx;
  slideContainer.style.transition = 'transform 0.5s ease';
  slideContainer.style.transform = `translateX(-${offset}px)`;
  // active 
  allSlides.forEach(slide => slide.classList.remove('active'));
  const centerSlide = allSlides[idx + 1];
  if (centerSlide) centerSlide.classList.add('active');

  currentIdx = idx;
}

moveSlide(currentIdx);

// 버튼 클릭
next.addEventListener('click', () => {
  currentIdx++;
  if (currentIdx >= allSlides.length - visibleCount) {
    slideContainer.style.transition = 'none';
    currentIdx = slides.length;
    slideContainer.style.transform = `translateX(-${currentIdx * (slideWidth + slideGap)}px)`;
    setTimeout(() => {
      moveSlide(currentIdx + 1);
    }, 20);
  } else {
    moveSlide(currentIdx);
  }
});
prev.addEventListener('click', () => {
  currentIdx--;
  if (currentIdx <= 0) {
    slideContainer.style.transition = 'none';
    currentIdx = slides.length;
    slideContainer.style.transform = `translateX(-${currentIdx * (slideWidth + slideGap)}px)`;
    setTimeout(() => {
      moveSlide(currentIdx - 1);
    }, 20);
  } else {
    moveSlide(currentIdx);
  }
});





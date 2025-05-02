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

function movebrand(){
    brandLeft -= 2
    if(brandLeft < -slidewidth * newbrandList.length/2){
        brandLeft = 0;
    }
    slid.style.left = brandLeft + 'px';
    requestAnimationFrame(movebrand);
}
requestAnimationFrame(movebrand);


// /brands 무한슬라이드

// top_button

window.addEventListener('scroll',()=>{
    let scrollAmt = window.scrollY;
    if(scrollAmt > brandsOffsetTop){
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
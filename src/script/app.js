// const ul1=document.querySelector('#ul1');
// const hover=document.querySelectorAll('.li');
// const a1=document.querySelector('#a1');
// const ul=document.querySelector('#ul2 ');
// const a=document.querySelector('#a2');
// const ul3=document.querySelector('#ul3');
// const a3=document.querySelector('#a3');
// a1.addEventListener('mouseover',(e)=>{
//     ul1.classList.add('show');
// });
// a1.addEventListener('mouseleave',(e)=>{
//     ul1.classList.remove('show');
// });
// a2.addEventListener('mouseover',(e)=>{
//     ul2.classList.add('show');
// });
// a2.addEventListener('mouseleave',(e)=>{
//     ul2.classList.remove('show');
// });
// a3.addEventListener('mouseover',(e)=>{
//     ul3.classList.add('show');
// });
// a3.addEventListener('mouseleave',(e)=>{
//     ul3.classList.remove('show');
// });
// sub mmenu
const btn2=document.querySelector('#btn2');
const clos=document.querySelector('#close');
const transl=document.querySelector('#transl');
btn2.addEventListener('click',(e)=>{
    console.log(e.target);
    transl.classList.add('trans');
})

function func(){
 
    transl.classList.add('trans');
}
clos.addEventListener('click',(e)=>{
    transl.classList.remove('trans');
});

// scroll header
const head=document.querySelector('#header');
window.addEventListener('scroll',(e)=>{
   
        if(window.innerWidth<768){
            if(window.scrollY>300){
                head.style.display='none';
           }else if(window.scrollY<300){
            head.style.display='flex';
          }
        }
});

// catalog
const btnCatlog=document.querySelector('#btnCatlog');
const catalog=document.querySelectorAll('.catalog');
btnCatlog.addEventListener('click',(e)=>{
   catalog.forEach((index,value)=>{
        console.log(index);
        index.classList.toggle('catSshow')
   });
});

//fillter
const btnFilter=document.querySelector('#btnFilter');
const down=document.querySelectorAll('.down');
btnFilter.addEventListener('click',(e)=>{
    btnFilter.classList.toggle('btn');
    down.forEach((index)=>{
        index.computedStyleMap()
        index.classList.toggle('dropdown');
    });
});
// scrolltop
const scrolltop=document.querySelector('#scrolltop');
scrolltop.addEventListener('click',(e)=>{
    window.scrollTo(
        {
            top:0,
            behavior:'smooth'
        }
    )
});
const lnk=document.querySelectorAll('.lnk');

lnk.forEach((index,value)=>{
    index.addEventListener('click',(e)=>{
        window.location.href='./videopage.html';
    });
});
// footer
const afooter=document.querySelector('#afooter');
const ulfooter=document.querySelector('.ulfooter1');
const ulfooter2=document.querySelector('.ulfooter2');
const more=document.querySelector('#more');
let flag=0;
afooter.addEventListener('click',mod2)
more.addEventListener('click',mods)
 
 

function mod2(e){
    flag++;
    if(flag%2){
     ulfooter2.classList.add('show')
    }else{
     ulfooter2.classList.remove('show')
    }
}
function mods(e){
    flag++;
    if(flag%2){
     ulfooter.classList.add('show')
    }else{
     ulfooter.classList.remove('show')
    }
}

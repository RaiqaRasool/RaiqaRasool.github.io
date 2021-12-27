const menu=document.querySelector('.nav-menu');
const menuham=document.querySelector('.hamberger');
menuham.addEventListener('click',function(){
    menuham.classList.toggle('cross');
    menu.classList.toggle('appear');
})

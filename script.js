const menubar = document.querySelector('#menu');// menu id ko select kiya
const Navbar = document.querySelector('.navbar');//navbar class ko select kiya
menubar.onclick=()=>{
    menubar.classList.toggle('bx-x');
    Navbar.classList.toggle('active')
}//jab menubar pe click hoga to menubar me bx-x class toggle hoga aur navbar me active class toggle hoga
const section=document.querySelectorAll('section');// sabhi section ko select kiya
const navlink = document.querySelectorAll('header nav a')// sabhi navlink ko select kiya
window.onscroll = ()=>{//jab scroll hoga to ye function chalega
    section.forEach(sec=>{
        let top = window.scrollY;
        
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if(top>offset && top < offset + height){
            sec.classList.add('start-animation');
            navlink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
              
            })//jab scroll hoga to jis section me hoga uske corresponding navlink me active class add ho jayega
        }
    })//sabhi section ke liye ye function chalega
    var header = document.querySelector('.header');//class header ko select kiya
    header.classList.toggle('sticky',window.scrollY>15) //15px scroll ke baad sticky(line aayega) hoga
    menubar.classList.remove('bx-x');//jab scroll hoga to menubar ka x sign remove ho jayega
    Navbar.classList.remove('active')//jab scroll hoga to navbar ka active class remove ho jayega
}

// // #111  #ff00ee   rgba(255,255,255,.1)



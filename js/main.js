var ul = document.querySelector('nav ul')
var menuBtn = document.querySelector('.menu-btn i')

function menuShow(){
    if(ul.classList.contains('open')){
        ul.classList.remove('open')
    }else{
        ul.classList.add('open')
    }
}

//sistema responsivo 
//botão de escuro ou claro
const chk = document.getElementById('chk');
chk.addEventListener('change',()=>{
    document.body.classList.toggle('dark-theme')
});


//pega o preloader pelo DOM
const preloader = document.querySelector(".preloader");
//espera a pagina carregar totalmente
document.addEventListener("DOMContentLoaded",()=>{

setTimeout(()=>{
    gsap.to(".preloader",
    {
        opacity:0,
        duration:2,
        x:200,
        //once the preloader has faded out
        onComplete(){
            //remove rotationg css animation
            preloader.computedStyleMap.animation = "none";
            //hide the preloader
            preloader.computedStyleMap.display = "none"

        },
    },
    
    );
},50)

gsap.fromTo("#header",{opacity:0},
{
    opacity:1,
    ease:"power3.out",
    duration:1.5,
    delay:1,
    y:50
    
})
gsap.fromTo("#Me",
{opacity:0},
{
    opacity:1,
    ease:"power3.out",
    duration:1.5,
    delay:2
});
gsap.fromTo(".text",
{opacity:0},
{
    opacity:1,
    ease:"power3.out",
    duration:1.5,
    delay:2,
});
gsap.fromTo("#icone",
{opacity:0,y:10,},
{opacity:1,y:0,ease: "power3.out", duration:2,delay:3}
);

});

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
window.onload =function piscou(){
    document.getElementById("Kevin.S").style.color = "black"
    setTimeout(()=>{
        document.getElementById("Kevin.S").style.transition = "1.6s"
        document.getElementById("Kevin.S").style.color = "white"
    },2000)
}




   
    








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



   
    








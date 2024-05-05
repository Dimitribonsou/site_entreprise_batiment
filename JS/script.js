
// recuperer le bouton hamburger
const btnhamburger=document.getElementById('burgerIcon')
const text=document.querySelector('.text_home')
const navbar=document.querySelector('nav ')
btnhamburger.addEventListener('click',()=>
{
    navbar.classList.toggle('show')
    text.classList.toggle('hiden')
})
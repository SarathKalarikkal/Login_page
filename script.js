const wrapper = document.querySelector('.wrapper')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')
const loginBtn = document.querySelector('.login-button')
const closeBtn = document.querySelector('.icon-close')
const uparrow = document.querySelector('.up-arrow')
const title = document.querySelector('.title')

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active')
})
loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active')
})

loginBtn.addEventListener('click',()=>{
    wrapper.classList.add('active-popup')
    uparrow.style.display = 'none'
    title.classList.add('dropdown')
})
closeBtn.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup')
    uparrow.style.display = 'block'
    title.classList.remove('dropdown')
})

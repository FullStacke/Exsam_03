const lightModeBtn = document.querySelector('.lightModeBtn'),
darkModeBtn = document.querySelector('.darkModeBtn'),
nightIcon = document.querySelector('#nightIcon'),
lightIcon = document.querySelector('#lightIcon'),
parentbtn = document.querySelector('.buttons')
const body = document.querySelector('body')


const modeLocol = localStorage.getItem('mode')

if(modeLocol){
  lightIcon.classList.remove('mode-active')
  nightIcon.classList.add('mode-active')
  body.classList.add('dark')
  darkModeBtn.style.backgroundColor = 'black'
  lightModeBtn.style.backgroundColor = 'black'
  parentbtn.style.border = '1px solid white'

} else{
  lightIcon.classList.add('mode-active')
  body.classList.remove('dark')
}

lightModeBtn.addEventListener('click',() => {
  lightIcon.classList.add('mode-active')
  nightIcon.classList.remove('mode-active')
  body.classList.remove('dark')

  darkModeBtn.style.backgroundColor = 'white'
  lightModeBtn.style.backgroundColor = 'white'
  parentbtn.style.border = 'none'
  localStorage.setItem('mode','')
  localStorage.removeItem('mode')
})

darkModeBtn.addEventListener('click',() =>{
  lightIcon.classList.remove('mode-active')
  nightIcon.classList.add('mode-active')
  body.classList.add('dark')

  darkModeBtn.style.backgroundColor = 'black'
  lightModeBtn.style.backgroundColor = 'black'
  parentbtn.style.border = '1px solid white'

  localStorage.setItem('mode','dark')
})

// loader selector 
const loader = document.querySelector('.loader')





// loader 
setTimeout(() => {
  loader.style.display = 'none'
}, 5500);




//mobile mode and menu
const sideMenu = document.querySelector('.side-menu'),
mobileModeLight = document.querySelector('.mobile-mode1'),
mobileModeNight = document.querySelector('.mobile-mode2'),
closeBtn = document.querySelector('#close-icon'),
burgerMenu = document.querySelector('.menu'),
night = document.querySelector('#night'),
light = document.querySelector('#light')
 
function lightMode() {
  mobileModeNight.classList.remove('hidden')
  mobileModeLight.classList.add('hidden')
  night.classList.add('mode-active')
  body.classList.add('dark')  
}
function darkMode() {
  mobileModeNight.classList.add('hidden')
  mobileModeLight.classList.remove('hidden') 
  light.classList.add('mode-active')
  body.classList.remove('dark')
 
}
mobileModeNight.addEventListener('click',darkMode)

mobileModeLight.addEventListener('click', lightMode)

burgerMenu.addEventListener('click',() => {
  sideMenu.style.transform = 'translateX(450px)'
  burgerMenu.classList.add('hidden')
})
closeBtn.addEventListener('click', () => {
  sideMenu.style.transform = 'translateX(-450px)' 
  burgerMenu.classList.remove('hidden')
})


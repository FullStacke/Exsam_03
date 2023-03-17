// loader selector 
const loader = document.querySelector('.loader')
// mode selectors 
const lightModeBtn = document.querySelector('.lightModeBtn'),
darkModeBtn = document.querySelector('.darkModeBtn'),
nightIcon = document.querySelector('#nightIcon'),
lightIcon = document.querySelector('#lightIcon'),
parentbtn = document.querySelector('.buttons')
const body = document.querySelector('body')
// advantage cards selectors
const advantageParent = document.querySelector('.advantage-card')
//project elector
const projectCards = document.querySelectorAll('.project-cards'),
projectNavItem = document.querySelectorAll('.project-nav__item'),
projectNav = document.querySelector('.project-nav')
//  dark mode 
const modeLocol = localStorage.getItem('mode')
// form selectors
const  parentForm = document.querySelector('.form-coffe'),
nameInput = document.querySelector('#name'),
numberInput = document.querySelector('#number'),
messageInput = document.querySelector('#message'),
errorMessage = document.querySelector('.error'),
succesMessage = document.querySelector('.succes'),
submitBtn = document.querySelector('.submitBtn')

// loader 
setTimeout(() => {
  loader.style.display = 'none'
}, 5500);

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

//  advantage cards 
class advantageCards{
  constructor(src,alt,title,descr){
    this.src = src,
    this.alt = alt,
    this.title = title,
    this.descr = descr
  }

  render() {
    advantageParent.innerHTML  += `
    <div class="advantage-card__items">
    <div class="advantage-card__items-img">
      <img src="${this.src}" alt="${this.alt}">
    </div>
    <div class="advantage-card__items-descr">
      <h4>${this.title}</h4>
      <span></span>
      <p class="global-p">
        ${this.descr}
      </p>
    </div>
    </div>
    
    `
    }
    
}


new advantageCards(
  'images/svg/afzalik1.svg',
  'afzalik1',
  'Individual yondashuv',
  'Biz har bir mijozga g\'amxo\'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz'
)
.render()

new advantageCards(
  'images/svg/afzalik2.svg',
  'afzalik2',
  'Ekspertiza',
  'Biz har bir mijozga g\'amxo\'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz'
)
.render()

new advantageCards(
  'images/svg/afzalik3.svg',
  'afzalik3',
  'Professional xizmat',
  'Biz har bir mijozga g\'amxo\'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz'
)
.render()

new advantageCards(
  'images/svg/afzalik1.svg',
  'afzalik4',
  'Individual yondashuv',
  'Biz har bir mijozga g\'amxo\'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz'
)
.render()

new advantageCards(
  'images/svg/afzalik2.svg',
  'afzalik2',
  'Ekspertiza',
  'Biz har bir mijozga g\'amxo\'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz'
)
.render()

new advantageCards(
  'images/svg/afzalik3.svg',
  'afzalik3',
  'Professional xizmat',
  'Biz har bir mijozga g\'amxo\'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz'
)
.render()


// form 
const regex = /^[a-zA-Z]{6,12}$/;
parentForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const nameInputValue = nameInput.value.trim()
  const numberInputValue = numberInput.value.trim()
  const messageInputValue = messageInput.value.trim()

  if (regex.test(nameInputValue) && regex.test(numberInputValue) && regex.test(messageInputValue)) {
    succesMessage.textContent = "Ma'lumot To'g'ri kirtildi"
    setTimeout(() => {
    succesMessage.textContent = ""
    }, 2500);
  }else{
    errorMessage.textContent = "Kirtilyotgan Ma'lumot 6 va 12 orasida bolshi kerak.shuningdek katta kichik lotin harflari va raqamlardan tashkil topgan bo'lishi mumkun !"
    setTimeout(() =>{
      errorMessage.textContent = ''
    },2500)
  }
})

// services section 
const parentCard = document.querySelector('.our-services__cards')

class services {
  constructor(src,alt,title,descr){
    this.src = src,
    this.alt = alt,
    this.title = title,
    this.descr = descr
  }
  render() {
    parentCard.innerHTML += `
    <div class="our-services__cards-items">
          <img src=" ${this.src} " alt="${this.alt}">
          <div>
            <h4>${this.title}</h4>
            <p>${this.descr}</p>
          </div>
        </div>
    
    `
  }

}


new services(
  'images/svg/services1.svg',
  'services1',
  'Bizning xizmatlar',
  'Bizdan eng yaxshi va eng zo\'r sifatga ega platforma yarating.'
)
.render()

new services(
  'images/svg/services2.svg',
  'services2',
  'UI/UX Dizayn',
  'Biz UI/UX dizayn xizmatlarini taqdim etamiz'
)
.render()

new services(
  'images/svg/services3.svg',
  'services3',
  'Mobil ilovalar',
  'Biz eng yaxshi dizaynerlar  xizmatlarini taqdim etamiz'

)
.render()

new services(
  'images/svg/services4.svg',
  'services4',
  'SMM',
  'Bizdan eng yaxshi va eng zo\'r sifatga ega platforma yarating.'
)
.render()

new services(
  'images/svg/services5.svg',
  'services5',
  'Grafik dizayn',
  'Biz fotografiya xizmatlarini taqdim etamiz'
)
.render()

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


var carrossel = document.getElementById('carrossel-imgs')
var carrossel_left_btn = document.getElementById('carrossel-left-btn')
var carrossel_right_btn = document.getElementById('carrossel-right-btn')
var carrossel_img = document.getElementsByClassName('carrossel-img')
var scrollLeft = carrossel.scrollLeft
var imgWidth = carrossel_img.innerWidth

carrossel_left_btn.addEventListener('click', () => {
    carrossel.scroll((scrollLeft - imgWidth), 0)
})

carrossel_right_btn.addEventListener('click', () => {
    carrossel.scroll((scrollLeft + imgWidth), 0)
})
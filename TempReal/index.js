
var texto = document.getElementById('horas')
var imgs = document.getElementById('imagens')
var fundo = document.getElementById('fundo')
var header = document.getElementById('header')
var footer = document.getElementById('footer')

var horario = new Date()
var hrs = horario.getHours()
var min = horario.getMinutes()

texto.innerHTML += `Agora são exatamente ${hrs}:${min}`


if (hrs > 6 && hrs <= 12) {
    imgs.innerHTML += `<img src='dia.jpg'/>`
} else if ( hrs > 12 && hrs < 18 ) {
    imgs.innerHTML += `<img src='tarde.jpg'/>`
    fundo.style.backgroundColor = '#d35634' 
} else if ( hrs >= 18 && hrs <= 24 ) {
    imgs.innerHTML += `<img src='noite.jpg'/>`
    fundo.style.backgroundColor = '#43484e' 
} else if ( hrs >= 1 && hrs <= 6 ){
    imgs.innerHTML += `<img src='madrugada.jpg'/>`
    fundo.style.backgroundColor = '#000000' 
    header.style.color = '#FFFFFF'
    footer.style.color = '#FFFFFF'
}


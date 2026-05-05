function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto') // corrigido

    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = "img/manha.jpg"
    } else if (hora < 18) {
        img.src = "img/tarde.jpg"
    } else {
        img.src = "img/noite.jpg"
    }

    var corpo = document.body

    if (hora >= 0 && hora < 12) {
    // MANHÃ
    img.src = "img/manha.jpg"
    corpo.style.backgroundColor = "#87CEEB" // azul claro
    } else if (hora < 18) {
    // TARDE
    img.src = "img/tarde.jpg"
    corpo.style.backgroundColor = "#FDB813" // amarelo/laranja
    } else {
    // NOITE
    img.src = "img/noite.jpg"
    corpo.style.backgroundColor = "#2c3e50" // azul escuro
    }

}
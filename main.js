const hora = document.getElementById('rel-horas')
const min = document.getElementById('rel-minutos')
const seg = document.getElementById('rel-segundos')

const relogio = () =>{
    let data = new Date()

    let hh = data.getHours() * 30
    let mm = data.getMinutes () * 6
    let ss = data.getSeconds() * 6


    hora.style.transform = `rotateZ(${hh + mm / 12}deg)`
    min.style.transform = `rotateZ(${mm}deg)`
    seg.style.transform = `rotateZ(${ss}deg)`
}
setInterval(relogio, 1000)

const horadig = document.getElementById('hora'),
      minutosdig = document.getElementById('minutos'),
      datadia = document.getElementById('dia'),
      datames = document.getElementById('mes'),
      dataano = document.getElementById('ano')


const relogiodig= () =>{
    let datadig = new Date()

    let hh = datadig.getHours ()
    let mm = datadig.getMinutes()
    let dia = datadig.getDay()
    let mes = datadig.getMonth()
    let ano = datadig.getFullYear()

    if(mm < 10){
        horadig.innerHTML= `${hh} :`
        minutosdig.innerHTML= `0${mm}`
    }else{
        horadig.innerHTML= `${hh} :`
        minutosdig.innerHTML= `${mm}`
    }

   

    let meses = ['Jan', 'Fev', 'Mar', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

    datadia.innerHTML=`${dia}`
    datames.innerHTML=`${meses[mes]}`
    dataano.innerHTML=`${ano}`

}
setInterval(relogiodig, 1000)

const botaoTema = document.getElementById('botaoTema')
const noturno = 'noturno'
const iconeTema = 'bxs-sun'

const temaSelecionado = localStorage.getItem('tema-selecionado')
const iconeSelecionado = localStorage.getItem('icone-selecionado')

const getTemaAtual = () => 
document.body.classList.contains(noturno) ? 'dark' : 'light'
const getIconeAtual = () => botaoTema.classList.contains(iconeTema) ? 'bxs-moon' : 'bxs-sun'

if(temaSelecionado){
    document.body.classList[temaSelecionado === 'dark' ? 'add' : 'remove'](noturno)
    botaoTema.classList[iconeSelecionado === 'bxs-moon' ? 'add' : 'remove'](iconeTema)
}

botaoTema.addEventListener('click', () => {
    document.body.classList.toggle(noturno)
    botaoTema.classList.toggle(iconeTema)

    localStorage.setItem('tema-selecionado', getTemaAtual())
    localStorage.setItem('icone-selecionado', getIconeAtual())
})




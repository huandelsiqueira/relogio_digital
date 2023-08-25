function contagem() {
    let horas = window.document.getElementById('horas')
    let minutos = window.document.getElementById('minutos')
    let segundos = window.document.getElementById('segundos')
    
    let data = new Date()
    let horas_relogio = data.getHours()
    let minutos_relogio = data.getMinutes()
    let segundos_relogio = data.getSeconds()

    horas.innerHTML = `${horas_relogio}`
    minutos.innerHTML = `${minutos_relogio}`
    segundos.innerHTML = segundos_relogio
}

setInterval(contagem, 1000);

horas.addEventListener('onload', contagem())
minutos.addEventListener('onload', contagem())
segundos.addEventListener('onload', contagem())
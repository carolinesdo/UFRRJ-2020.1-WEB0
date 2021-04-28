setInterval(function(){
    let newHora = new Date();
    let hora = newHora.getHours();
    let minuto = newHora.getMinutes();
    let segundo = newHora.getSeconds();
    minuto = zero(minuto);
    segundo = zero(segundo);
    document.getElementById('relogio').textContent = hora+':'+minuto+':'+segundo;
},1000)

function zero(x) {
    if (x < 10) {
        x = '0' + x;
    } return x;
}
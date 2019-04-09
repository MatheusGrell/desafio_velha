function Main() {
    var tela = document.querySelector("canvas");
    var pincel = tela.getContext('2d');
    
    function desenhaBorda(x, y) {
        pincel.strokeRect(x, y, 100, 100);
    }

    for (x = 0; x <= 200; x += 100) {
        for (y = 0; y <= 200; y += 100) {
            desenhaBorda(x, y);
        }
    }

    function posicao(e) {
        var el = this;
        var coordenadas = el.getBoundingClientRect();
        console.log('posição x', coordenadas.left, 'posição y', coordenadas.top)
        desenhaCirculo();
    }
    


    //circulo
    function desenhaCirculo(evento) {
        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;

        pincel.strokeStyle = 'red'
        pincel.beginPath();
        pincel.arc(x, y, 25, 0, 2 * 3.14);
        pincel.stroke();
    }

    tela.onclick = desenhaCirculo;

}

document.addEventListener("DOMContentLoaded", Main);
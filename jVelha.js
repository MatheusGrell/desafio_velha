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

    //circulo
    function desenhaCirculo(evento) {

        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;

        //linha1
        if (x < 100 && y < 100) {
            x = 50;
            y = 50;
        }

        if (x < 200 && x > 100 && y < 100) {
            x = 150;
            y = 50;
        }

        if (x < 300 && x > 200 && y < 100) {
            x = 250;
            y = 50;
        }
        //linha2
        if (x < 100 && y < 200 && y > 100) {
            x = 50;
            y = 150;
        }

        if (x < 200 && x > 100 && y < 200 && y > 100) {
            x = 150;
            y = 150;
        }

        if (x < 300 && x > 200 && y < 200 && y > 100) {
            x = 250;
            y = 150;
        }
        //linha3
        if (x < 100 && y < 300 && y > 200) {
            x = 50;
            y = 250;
        }

        if (x < 200 && x > 100 && y < 300 && y > 200) {
            x = 150;
            y = 250;
        }

        if (x < 300 && x > 200 && y < 300 && y > 200) {
            x = 250;
            y = 250;
        }

        pincel.strokeStyle = 'red'
        pincel.beginPath();
        pincel.arc(x, y, 25, 0, 2 * 3.14);
        pincel.stroke();
    }

    //X's
    function desenhaX(evento) {

        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;

        //linha1
        if (x < 100 && y < 100) {
            x = 0;
            y = 0;
        }

        if (x < 200 && x > 100 && y < 100) {
            x = 100;
            y = 0;
        }

        if (x < 300 && x > 200 && y < 100) {
            x = 200;
            y = 0;
        }
        //linha2
        if (x < 100 && y < 200 && y > 100) {
            x = 0;
            y = 100;
        }

        if (x < 200 && x > 100 && y < 200 && y > 100) {
            x = 100;
            y = 100;
        }

        if (x < 300 && x > 200 && y < 200 && y > 100) {
            x = 200;
            y = 100;
        }
        //linha3
        if (x < 100 && y < 300 && y > 200) {
            x = 0;
            y = 200;
        }

        if (x < 200 && x > 100 && y < 300 && y > 200) {
            x = 100;
            y = 200;
        }

        if (x < 300 && x > 200 && y < 300 && y > 200) {
            x = 200;
            y = 200;
        }

        pincel.beginPath();
        pincel.strokeStyle = "blue";
        pincel.moveTo(x, y);
        pincel.lineTo(x + 100, y + 100);
        pincel.stroke();

        pincel.beginPath();
        pincel.strokeStyle = "blue";
        pincel.moveTo(x + 100, y);
        pincel.lineTo(x, y + 100);
        pincel.stroke();
    }

   
    var jogadas = 9;

    if (jogadas % 2 == 1) {
        tela.onclick = desenhaCirculo;
        jogadas--
    } else if (jogadas % 2 == 0) {
        tela.onclick = desenhaX;
        jogadas--;
    }


}

document.addEventListener("DOMContentLoaded", Main);
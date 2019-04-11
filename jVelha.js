function Main() {
    var tela = document.querySelector("canvas");
    var pincel = tela.getContext('2d');
    var aux = true;
    function desenhaBorda(x, y) {
        pincel.strokeRect(x, y, 100, 100);
    }

    for (x = 0; x <= 200; x += 100) {
        for (y = 0; y <= 200; y += 100) {
            desenhaBorda(x, y);
        }
    }

    //Validação de vitória;
    function verificaGanhador(arrCasa) {
        debugger;
        setTimeout(() => {
            if (arrCasa[0] == 1 && arrCasa[1] == 1 && arrCasa[2] == 1) {
                alert('Parabéns X, você é demais!');
                aux = false;
                return;
            } else if (arrCasa[0] == 1 && arrCasa[3] == 1 && arrCasa[6] == 1) {
                alert('Parabéns X, você é demais!');
                aux = false;
                return;
            } else if (arrCasa[0] == 1 && arrCasa[4] == 1 && arrCasa[8] == 1) {
                alert('Parabéns X, você é demais!');
                aux = false;
                return;
            } else if (arrCasa[3] == 1 && arrCasa[4] == 1 && arrCasa[5] == 1) {
                alert('Parabéns X, você é demais!');
                aux = false;
                return;
            } else if (arrCasa[6] == 1 && arrCasa[7] == 1 && arrCasa[8] == 1) {
                alert('Parabéns X, você é demais!');
                aux = false;
                return;
            } else if (arrCasa[1] == 1 && arrCasa[4] == 1 && arrCasa[7] == 1) {
                alert('Parabéns X, você é demais!');
                aux = false;
                return;
            } else if (arrCasa[2] == 1 && arrCasa[5] == 1 && arrCasa[8] == 1) {
                alert('Parabéns X, você é demais!');
                aux = false;
                return;
            } else if (arrCasa[2] == 1 && arrCasa[4] == 1 && arrCasa[6] == 1) {
                alert('Parabéns X, você é demais!');
                aux = false;
                return;
            }
        }, 20);

        setTimeout(() => {
            if (arrCasa[0] == -1 && arrCasa[1] == -1 && arrCasa[2] == -1) {
                alert('Parabéns amigo Bola, você ganhou');
                aux = false;
                return;
            } else if (arrCasa[0] == -1 && arrCasa[3] == -1 && arrCasa[6] == -1) {
                alert('Parabéns amigo Bola, você ganhou');
                aux = false;
                return;
            } else if (arrCasa[0] == -1 && arrCasa[4] == -1 && arrCasa[8] == -1) {
                alert('Parabéns amigo Bola, você ganhou');
                aux = false;
                return;
            } else if (arrCasa[3] == -1 && arrCasa[4] == -1 && arrCasa[5] == -1) {
                alert('Parabéns amigo Bola, você ganhou');
                aux = false;
                return;
            } else if (arrCasa[6] == -1 && arrCasa[7] == -1 && arrCasa[8] == -1) {
                alert('Parabéns amigo Bola, você ganhou');
                aux = false;
                return;
            } else if (arrCasa[1] == -1 && arrCasa[4] == -1 && arrCasa[7] == -1) {
                alert('Parabéns amigo Bola, você ganhou');
                aux = false;
                return;
            } else if (arrCasa[2] == -1 && arrCasa[5] == -1 && arrCasa[8] == -1) {
                alert('Parabéns amigo Bola, você ganhou');
                aux = false;
                return;
            } else if (arrCasa[2] == -1 && arrCasa[4] == -1 && arrCasa[6] == -1) {
                alert('Parabéns amigo Bola, você ganhou');
                aux = false;
                return;
            }
        }, 20);


        setTimeout(() => {
            if (jogadas == 0 && aux == true) {
                alert('empatou');
                aux = false;
            }

        }, 30);
    }


    var jogadas = 9;
    // 1 = O
    // -1 = x
    arrCasa = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    flagPassa = false;
    //desenho jogada
    function desenhaJogada(evento) {

        if (aux == true) {
            if (jogadas % 2 === 1 && jogadas > 0) {
                var x = evento.pageX - tela.offsetLeft;
                var y = evento.pageY - tela.offsetTop;
                // switch(arrCasa){
                //     case : 
                // }

                //linha1
                if (x < 100 && y < 100 && arrCasa[0] == 0) {
                    x = 50;
                    y = 50;
                    pintar(x, y);
                    arrCasa[0] = -1;
                    verificaGanhador(arrCasa);
                }

                if (x < 200 && x > 100 && y < 100 && arrCasa[1] == 0) {
                    x = 150;
                    y = 50;
                    pintar(x, y);
                    arrCasa[1] = -1;
                    verificaGanhador(arrCasa);
                }

                if (x < 300 && x > 200 && y < 100 && arrCasa[2] == 0) {
                    x = 250;
                    y = 50;
                    pintar(x, y);
                    arrCasa[2] = -1;
                    verificaGanhador(arrCasa);
                }
                //linha2
                if (x < 100 && y < 200 && y > 100 && arrCasa[3] == 0) {
                    x = 50;
                    y = 150;
                    pintar(x, y);
                    arrCasa[3] = -1;
                    verificaGanhador(arrCasa);
                }
                if (x < 200 && x > 100 && y < 200 && y > 100 && arrCasa[4] == 0) {
                    x = 150;
                    y = 150;
                    pintar(x, y);
                    arrCasa[4] = -1;
                    verificaGanhador(arrCasa);
                }
                if (x < 300 && x > 200 && y < 200 && y > 100 && arrCasa[5] == 0) {
                    x = 250;
                    y = 150;
                    pintar(x, y);
                    arrCasa[5] = -1;
                    verificaGanhador(arrCasa);
                }
                //linha3
                if (x < 100 && y < 300 && y > 200 && arrCasa[6] == 0) {
                    x = 50;
                    y = 250;
                    pintar(x, y);
                    arrCasa[6] = -1;
                    verificaGanhador(arrCasa);
                }
                if (x < 200 && x > 100 && y < 300 && y > 200 && arrCasa[7] == 0) {
                    x = 150;
                    y = 250;
                    pintar(x, y);
                    arrCasa[7] = -1;
                    verificaGanhador(arrCasa);
                }
                if (x < 300 && x > 200 && y < 300 && y > 200 && arrCasa[8] == 0) {
                    x = 250;
                    y = 250;
                    pintar(x, y);
                    arrCasa[8] = -1;
                    verificaGanhador(arrCasa);
                }

            } else if (jogadas % 2 === 0 && jogadas > 0) {
                var x = evento.pageX - tela.offsetLeft;
                var y = evento.pageY - tela.offsetTop;

                //linha1
                if (x < 100 && y < 100 && arrCasa[0] == 0) {
                    x = 0;
                    y = 0;
                    pintar(x, y);
                    arrCasa[0] = 1;
                    verificaGanhador(arrCasa);
                }
                if (x < 200 && x > 100 && y < 100 && arrCasa[1] == 0) {
                    x = 100;
                    y = 0;
                    pintar(x, y);
                    arrCasa[1] = 1;
                    verificaGanhador(arrCasa);
                }
                if (x < 300 && x > 200 && y < 100 && arrCasa[2] == 0) {
                    x = 200;
                    y = 0;
                    pintar(x, y);
                    arrCasa[2] = 1;
                    verificaGanhador(arrCasa);
                }
                //linha2
                if (x < 100 && y < 200 && y > 100 && arrCasa[3] == 0) {
                    x = 0;
                    y = 100;
                    pintar(x, y);
                    arrCasa[3] = 1;
                    verificaGanhador(arrCasa);
                }
                if (x < 200 && x > 100 && y < 200 && y > 100 && arrCasa[4] == 0) {
                    x = 100;
                    y = 100;
                    pintar(x, y);
                    arrCasa[4] = 1;
                    verificaGanhador(arrCasa);
                }
                if (x < 300 && x > 200 && y < 200 && y > 100 && arrCasa[5] == 0) {
                    x = 200;
                    y = 100;
                    pintar(x, y);
                    arrCasa[5] = 1;
                    verificaGanhador(arrCasa);
                }
                //linha3
                if (x < 100 && y < 300 && y > 200 && arrCasa[6] == 0) {
                    x = 0;
                    y = 200;
                    pintar(x, y);
                    arrCasa[6] = 1;
                    verificaGanhador(arrCasa);
                }
                if (x < 200 && x > 100 && y < 300 && y > 200 && arrCasa[7] == 0) {
                    x = 100;
                    y = 200;
                    pintar(x, y);
                    arrCasa[7] = 1;
                    verificaGanhador(arrCasa);
                }
                if (x < 300 && x > 200 && y < 300 && y > 200 && arrCasa[8] == 0) {
                    x = 200;
                    y = 200;
                    pintar(x, y);
                    arrCasa[8] = 1;
                    verificaGanhador(arrCasa);
                }
            }
        } else {
            alert('Jogo finalizado. Favor reiniciar o jogo');
        }

        // for (let index = 0; index < array.length; index++) {
        //     if (arrCasa[index] == 0) {
        //         return true;
        //     }                        
        // }

    }
    function pintar(x, y) {
        if (jogadas % 2 == 1 && jogadas > 0) {
            pincel.strokeStyle = 'red'
            pincel.beginPath();
            pincel.arc(x, y, 25, 0, 2 * 3.14);
            pincel.stroke();
            jogadas--;
        } else if (jogadas % 2 == 0 && jogadas > 0) {
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
            jogadas--;
        }
    }

    tela.onclick = desenhaJogada;

}

document.addEventListener("DOMContentLoaded", Main);
window.onload = function(){

    //documento.getElementById ---> recupera o elemento para manipulação
    var display = document.getElementById('display');

    var hour = document.getElementById('hour');
    var minute = document.getElementById('minute');
    var secound = document.getElementById('secound');

    var start = document.getElementById('start');

    var cronometroSeg;

    var horaAtual;
    var minutoAtual;
    var segundoAtual;

    //Armazenará um evento que fará um looping a cada 1s.
    var interval;

    //Aqui estou inserindo i horas à variável HOUR.
    for( var i = 0; i <= 23; i++){
        hour.innerHTML+='<option value="'+i+'">'+i+'</option>';
    }

    //Aqui estou inserindo i minutos à variável MINUTE.
    for( var i = 0; i < 60; i++){
        minute.innerHTML+='<option value="'+i+'">'+i+'</option>';
    }

    //Aqui estou inserindo i segundos à variável SECOUND.
    for( var i = 0; i < 60; i++){
        secound.innerHTML+='<option value="'+i+'">'+i+'</option>';
    }

    //Ao clicar no botão START, algo deverá acontecer ....
    start.addEventListener('click',function(){

        //horaAtual está recebendo a hora selecionada no painel.
        horaAtual = hour.value;
        //minutoAtual está recebendo o minuto selecionado no painel.
        minutoAtual = minute.value;
        //segundoAtual está recebendo o segundo selecionado no painel.
        segundoAtual = secound.value;

        //display.childNodes[1] --> Vou até a variável 'display', e seleciono o primeiro elemento filho. No caso, o 'h3'.
        //.innerHTML = --> Vai adcionar esses elementos ao h3, onde será possível ver o tempo diminuir.
        display.childNodes[1].innerHTML = horaAtual+":"+minutoAtual+":"+segundoAtual;

        //Interval receberá uma função que fará algo a cada 1 segundo.
        interval = setInterval(function(){
            
            segundoAtual--;

            if(segundoAtual <= 0){
                if(horaAtual > 0){
                    horaAtual--;
                    minutoAtual = 59;
                    segundoAtual = 59;
                }else{
                    if(minutoAtual > 0){
                        minutoAtual--;
                        segundoAtual = 59;
                    }else{
                        document.getElementById('sound').play();
                        clearInterval(interval);
                        alert("Time's Over!");
                    }
                }
                
            }

            display.childNodes[1].innerHTML = horaAtual+":"+minutoAtual+":"+segundoAtual;
        }, 1000);
    })

}
window.onload = function(){
    var n = 0;

    //Continue
    /*for( var i = 0; i < 10; i++){
        //Ignora este ciclo e volta para o laço
        if(i == 5){
            continue;
        }
        console.log(i);
    }*/

    while(n < 10){
        console.log(n);
        //Quebra o laço imediatamente
        if(n == 5){
            break;
        }
        n++;
    }
}
function calculoDePontos(velocidade, limite, divisor)
{
    let pontos = 12;
    return Math.floor(pontos - (velocidade-limite)/divisor);
}

function autoEstradas(velocidade){
    let mostrarAutoEstradas = document.getElementById('mostrarAutoEstradas');
    if(velocidade <= 120){
        mostrarAutoEstradas.setAttribute("class", "alert alert-success");
        mostrarAutoEstradas.innerHTML = "Dentro do limite";
    }else {
        if(velocidade <= 140){
            let actualPontos = calculoDePontos(velocidade, 120, 30);
            mostrarAutoEstradas.setAttribute("class", "alert alert-warning");
            mostrarAutoEstradas.innerHTML = 'Pontos: ' +actualPontos + "<br>Paga uma multa entre de 60€ até 300€";
        }
        else if(velocidade <= 180){
            let actualPontos = calculoDePontos(velocidade, 120, 30);
            mostrarAutoEstradas.setAttribute("class", "alert alert-danger");
            mostrarAutoEstradas.innerHTML = 'Pontos: ' +actualPontos + "<br>Cometeu uma contraordenação grave. <br>Paga uma multa entre de 120€ até 600€";
        }
        else if(velocidade <= 240){
            let actualPontos = calculoDePontos(velocidade, 120, 60);
            mostrarAutoEstradas.setAttribute("class", "alert alert-danger");
            mostrarAutoEstradas.innerHTML = 'Pontos: ' +actualPontos + "<br>Cometeu uma contraordenação muito grave. <br>Paga uma multa entre de 300€ até 1500€";
        }
        else{
            let actualPontos = calculoDePontos(velocidade, 120, 60);
            mostrarAutoEstradas.setAttribute("class", "alert alert-danger");
            mostrarAutoEstradas.innerHTML = 'Pontos: ' +actualPontos + "<br>Cometeu uma contraordenação muito grave. Toma cuidado! <br>Paga uma multa entre de 500€ até 2500€";
        }
    }
}

function foraLocalidades(velocidade){
    let mostrarForaLocalidades = document.getElementById('mostrarForaLocalidades');
    if(velocidade <= 90){
        mostrarForaLocalidades.setAttribute("class", "alert alert-success");
        mostrarForaLocalidades.innerHTML = "Dentro do limite";
    }else {
        if(velocidade <= 110){
            let actualPontos = calculoDePontos(velocidade, 90, 30);
            mostrarForaLocalidades.setAttribute("class", "alert alert-warning");
            mostrarForaLocalidades.innerHTML = 'Pontos: ' +actualPontos + "<br>Paga uma multa entre de 60€ até 300€";
        }
        else if(velocidade <= 150){
            let actualPontos = calculoDePontos(velocidade, 90, 30);
            mostrarForaLocalidades.setAttribute("class", "alert alert-danger");
            mostrarForaLocalidades.innerHTML = 'Pontos: ' +actualPontos + "<br>Cometeu uma contraordenação grave. <br>Paga uma multa entre de 120€ até 600€";
        }
        else if(velocidade <= 210){
            let actualPontos = calculoDePontos(velocidade, 90, 60);
            mostrarForaLocalidades.setAttribute("class", "alert alert-danger");
            mostrarForaLocalidades.innerHTML = 'Pontos: ' +actualPontos + "<br>Cometeu uma contraordenação muito grave. <br>Paga uma multa entre de 300€ até 1500€";
        }
        else{
            let actualPontos = calculoDePontos(velocidade, 90, 60);
            document.getElementById('mostrarForaLocalidades').setAttribute("class", "alert alert-danger");
            document.getElementById('mostrarForaLocalidades').innerHTML = 'Pontos: ' +actualPontos + "<br>Cometeu uma contraordenação muito grave. Toma cuidado! <br>Paga uma multa entre de 500€ até 2500€";
        }
    }
}

function dentroLocalidades(velocidade){
    let mostrarDentroLocalidades = document.getElementById('mostrarDentroLocalidades');
    if(velocidade <= 50){
        mostrarDentroLocalidades.setAttribute("class", "alert alert-success");
        mostrarDentroLocalidades.innerHTML = "Dentro do limite";
    }else {
        if(velocidade <= 60){
            let actualPontos = calculoDePontos(velocidade, 50, 20);
            mostrarDentroLocalidades.setAttribute("class", "alert alert-warning");
            mostrarDentroLocalidades.innerHTML = 'Pontos: ' +actualPontos + "<br>Paga uma multa entre de 60€ até 300€";
        }
        else if(velocidade <= 80){
            let actualPontos = calculoDePontos(velocidade, 50, 20);
            mostrarDentroLocalidades.setAttribute("class", "alert alert-danger");
            mostrarDentroLocalidades.innerHTML = 'Pontos: ' +actualPontos + "<br>Cometeu uma contraordenação grave. <br>Paga uma multa entre de 120€ até 600€";
        }
        else if(velocidade <= 120){
            let actualPontos = calculoDePontos(velocidade, 50, 40);
            mostrarDentroLocalidades.setAttribute("class", "alert alert-danger");
            mostrarDentroLocalidades.innerHTML = 'Pontos: ' +actualPontos + "<br>Cometeu uma contraordenação muito grave. <br>Paga uma multa entre de 300€ até 1500€";
        }
        else{
            let actualPontos = calculoDePontos(velocidade, 50, 40);
            mostrarDentroLocalidades.setAttribute("class", "alert alert-danger");
            mostrarDentroLocalidades.innerHTML = 'Pontos: ' +actualPontos + "<br>Cometeu uma contraordenação muito grave. Toma cuidado! <br>Paga uma multa entre de 500€ até 2500€";
        }
    }
}
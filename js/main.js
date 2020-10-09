pontos = 12;

function autoEstradas(velocidade){
    if(velocidade <= 120){
        document.getElementById('mostrarAutoEstradas').setAttribute("class", "alert alert-success");
        document.getElementById('mostrarAutoEstradas').innerHTML = "Dentro do limite";
    }else {
        if(velocidade <= 140){
            let actualPontos = Math.floor(pontos - (velocidade - 120) / 30);
            document.getElementById('mostrarAutoEstradas').setAttribute("class", "alert alert-warning");
            document.getElementById('mostrarAutoEstradas').innerHTML = 'Pontos: ' +actualPontos + "<br>Paga uma multa entre de 60€ até 300€";
        }
        else if(velocidade <= 180){
            let actualPontos = Math.floor(pontos - (velocidade - 120) / 30);
            document.getElementById('mostrarAutoEstradas').setAttribute("class", "alert alert-danger");
            document.getElementById('mostrarAutoEstradas').innerHTML = 'Pontos: ' +actualPontos + "<br>Cometeu uma contraordenação grave. <br>Paga uma multa entre de 120€ até 600€";
        }
        else if(velocidade <= 240){
            let actualPontos = Math.floor(pontos - (velocidade - 120) / 60);
            document.getElementById('mostrarAutoEstradas').setAttribute("class", "alert alert-danger");
            document.getElementById('mostrarAutoEstradas').innerHTML = 'Pontos: ' +actualPontos + "<br>Cometeu uma contraordenação muito grave. <br>Paga uma multa entre de 300€ até 1500€";
        }
        else{
            let actualPontos = Math.floor(pontos - (velocidade - 120) / 60);
            document.getElementById('mostrarAutoEstradas').setAttribute("class", "alert alert-danger");
            document.getElementById('mostrarAutoEstradas').innerHTML = 'Pontos: ' +actualPontos + "<br>Cometeu uma contraordenação muito grave. Toma cuidado! <br>Paga uma multa entre de 500€ até 2500€";
        }
    }
}

function foraLocalidades(velocidade){
    if(velocidade <= 90){
        document.getElementById('mostrarForaLocalidades').setAttribute("class", "alert alert-success");
        document.getElementById('mostrarForaLocalidades').innerHTML = "Dentro do limite";
    }else {
        if(velocidade <= 110){
            let actualPontos = Math.floor(pontos - (velocidade - 90) / 30);
            document.getElementById('mostrarForaLocalidades').setAttribute("class", "alert alert-warning");
            document.getElementById('mostrarForaLocalidades').innerHTML = 'Pontos: ' +actualPontos + "<br>Paga uma multa entre de 60€ até 300€";
        }
        else if(velocidade <= 150){
            let actualPontos = Math.floor(pontos - (velocidade - 90) / 30);
            document.getElementById('mostrarForaLocalidades').setAttribute("class", "alert alert-danger");
            document.getElementById('mostrarForaLocalidades').innerHTML = 'Pontos: ' +actualPontos + "<br>Cometeu uma contraordenação grave. <br>Paga uma multa entre de 120€ até 600€";
        }
        else if(velocidade <= 210){
            let actualPontos = Math.floor(pontos - (velocidade - 90) / 60);
            document.getElementById('mostrarForaLocalidades').setAttribute("class", "alert alert-danger");
            document.getElementById('mostrarForaLocalidades').innerHTML = 'Pontos: ' +actualPontos + "<br>Cometeu uma contraordenação muito grave. <br>Paga uma multa entre de 300€ até 1500€";
        }
        else{
            let actualPontos = Math.floor(pontos - (velocidade - 90) / 60);
            document.getElementById('mostrarForaLocalidades').setAttribute("class", "alert alert-danger");
            document.getElementById('mostrarForaLocalidades').innerHTML = 'Pontos: ' +actualPontos + "<br>Cometeu uma contraordenação muito grave. Toma cuidado! <br>Paga uma multa entre de 500€ até 2500€";
        }
    }
}

function dentroLocalidades(velocidade){
    if(velocidade <= 50){
        document.getElementById('mostrarDentroLocalidades').setAttribute("class", "alert alert-success");
        document.getElementById('mostrarDentroLocalidades').innerHTML = "Dentro do limite";
    }else {
        if(velocidade <= 60){
            let actualPontos = Math.floor(pontos - (velocidade - 50) / 20);
            document.getElementById('mostrarDentroLocalidades').setAttribute("class", "alert alert-warning");
            document.getElementById('mostrarDentroLocalidades').innerHTML = 'Pontos: ' +actualPontos + "<br>Paga uma multa entre de 60€ até 300€";
        }
        else if(velocidade <= 80){
            let actualPontos = Math.floor(pontos - (velocidade - 50) / 20);
            document.getElementById('mostrarDentroLocalidades').setAttribute("class", "alert alert-danger");
            document.getElementById('mostrarDentroLocalidades').innerHTML = 'Pontos: ' +actualPontos + "<br>Cometeu uma contraordenação grave. <br>Paga uma multa entre de 120€ até 600€";
        }
        else if(velocidade <= 120){
            let actualPontos = Math.floor(pontos - (velocidade - 50) / 40);
            document.getElementById('mostrarDentroLocalidades').setAttribute("class", "alert alert-danger");
            document.getElementById('mostrarDentroLocalidades').innerHTML = 'Pontos: ' +actualPontos + "<br>Cometeu uma contraordenação muito grave. <br>Paga uma multa entre de 300€ até 1500€";
        }
        else{
            let actualPontos = Math.floor(pontos - (velocidade - 50) / 40);
            document.getElementById('mostrarDentroLocalidades').setAttribute("class", "alert alert-danger");
            document.getElementById('mostrarDentroLocalidades').innerHTML = 'Pontos: ' +actualPontos + "<br>Cometeu uma contraordenação muito grave. Toma cuidado! <br>Paga uma multa entre de 500€ até 2500€";
        }
    }
}
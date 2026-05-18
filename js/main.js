function calculoDePontos(velocidade, limite, divisor) {

    const pontos = 12;

    return Math.max(
        0,
        Math.floor(
            pontos - ((velocidade - limite) / divisor)
        )
    );
}

function atualizarResultado(elemento, classe, mensagem) {

    elemento.className = `alert ${classe}`;

    elemento.innerHTML = mensagem;
}

function verificarRadar(config) {

    const {
        velocidade,
        limite,
        outputId,
        leve,
        grave,
        muitoGrave,
        divisorLeve,
        divisorGrave
    } = config;

    const output =
        document.getElementById(outputId);

    if (!velocidade || velocidade < 0) {

        atualizarResultado(
            output,
            'alert-danger',
            'Digite uma velocidade válida.'
        );

        return;
    }

    if (velocidade <= limite) {

        atualizarResultado(
            output,
            'alert-success',
            'Dentro do limite.'
        );

        return;
    }

    let mensagem = '';
    let classe = 'alert-danger';
    let pontos = 0;

    if (velocidade <= leve) {

        pontos = calculoDePontos(
            velocidade,
            limite,
            divisorLeve
        );

        classe = 'alert-warning';

        mensagem = `
            Pontos: ${pontos}
            <br>
            Paga uma multa entre 60€ e 300€
        `;

    } else if (velocidade <= grave) {

        pontos = calculoDePontos(
            velocidade,
            limite,
            divisorLeve
        );

        mensagem = `
            Pontos: ${pontos}
            <br>
            Cometeu uma contraordenação grave.
            <br>
            Paga uma multa entre 120€ e 600€
        `;

    } else if (velocidade <= muitoGrave) {

        pontos = calculoDePontos(
            velocidade,
            limite,
            divisorGrave
        );

        mensagem = `
            Pontos: ${pontos}
            <br>
            Cometeu uma contraordenação muito grave.
            <br>
            Paga uma multa entre 300€ e 1500€
        `;

    } else {

        pontos = calculoDePontos(
            velocidade,
            limite,
            divisorGrave
        );

        mensagem = `
            Pontos: ${pontos}
            <br>
            Cometeu uma contraordenação muito grave.
            <br>
            Toma cuidado!
            <br>
            Paga uma multa entre 500€ e 2500€
        `;
    }

    atualizarResultado(
        output,
        classe,
        mensagem
    );
}

/* =========================
   AUTOESTRADAS
========================= */

document
    .getElementById('autoestradaBtn')
    .addEventListener('click', () => {

        const velocidade = Number(
            document
                .getElementById('autoestradaInput')
                .value
        );

        verificarRadar({
            velocidade: velocidade,
            limite: 120,
            outputId: 'autoestradaResultado',
            leve: 140,
            grave: 180,
            muitoGrave: 240,
            divisorLeve: 30,
            divisorGrave: 60
        });

});

/* =========================
   FORA DAS LOCALIDADES
========================= */

document
    .getElementById('foraLocalidadesBtn')
    .addEventListener('click', () => {

        const velocidade = Number(
            document
                .getElementById('foraLocalidadesInput')
                .value
        );

        verificarRadar({
            velocidade: velocidade,
            limite: 90,
            outputId: 'foraLocalidadesResultado',
            leve: 110,
            grave: 150,
            muitoGrave: 210,
            divisorLeve: 30,
            divisorGrave: 60
        });

});

/* =========================
   DENTRO DAS LOCALIDADES
========================= */

document
    .getElementById('dentroLocalidadesBtn')
    .addEventListener('click', () => {

        const velocidade = Number(
            document
                .getElementById('dentroLocalidadesInput')
                .value
        );

        verificarRadar({
            velocidade: velocidade,
            limite: 50,
            outputId: 'dentroLocalidadesResultado',
            leve: 60,
            grave: 80,
            muitoGrave: 120,
            divisorLeve: 20,
            divisorGrave: 40
        });

});
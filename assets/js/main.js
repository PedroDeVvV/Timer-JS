function relogio() {

    function pegarHoraSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-br', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    const titulo = document.querySelector('h1');
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = pegarHoraSegundos(segundos);
        }, 1000);
    }

    iniciar.addEventListener('click', function (e) {
        clearInterval(timer);
        iniciaRelogio();
        relogio.classList.remove('timerPausado');
        titulo.innerHTML = "Timer em Execução...";
        iniciar.innerHTML = "Iniciar";
    });

    pausar.addEventListener('click', function (e) {
        setTimeout(clearInterval(timer));
        relogio.classList.add('timerPausado');
        titulo.innerHTML = "Timer Pausado";
        iniciar.innerHTML = "Retomar";
    });

    zerar.addEventListener('click', function (e) {
        segundos = 0;
        relogio.innerHTML = "00:00:00";
        titulo.innerHTML = "Timer";
        relogio.classList.remove('timerPausado')
        iniciar.innerHTML = "Iniciar";
    });

}

relogio();
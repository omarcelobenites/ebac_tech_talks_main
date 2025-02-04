AOS.init();

const dataDoEvento = new Date("July 27, 2024 18:41:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = (1000 * 60 * 60 * 24);
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento %  diaEmMs) / horaEmMs);
    const minutoAteOEvento = Math.floor((distanciaAteOEvento %  horaEmMs) / minutoEmMs);
    const segundosAteOEvento =  Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minutoAteOEvento);
    console.log(segundosAteOEvento);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutoAteOEvento}m ${segundosAteOEvento}s`;
    if(distanciaAteOEvento  < 0){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = '(Evento Expirado)';
    }
},1000);
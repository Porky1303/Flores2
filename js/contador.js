var btn = document.getElementById('btn'),
    flor1 = document.getElementById('flor1'),
    flor2 = document.getElementById('flor2'),
    flor3 = document.getElementById('flor3'),
    flor4 = document.getElementById('flor4'),
    flor5 = document.getElementById('flor5'),
    flor6 = document.getElementById('flor6'),
    flor7 = document.getElementById('flor7'),
    flor8 = document.getElementById('flor8'),
    flor9 = document.getElementById('flor9'),
    flor10 = document.getElementById('flor10'),
    flor11 = document.getElementById('flor11'),
    flor12 = document.getElementById('flor12'),
    flor13 = document.getElementById('flor13'),
    flor14 = document.getElementById('flor14'),
    flor15 = document.getElementById('flor15'),
    flor16 = document.getElementById('flor16'),
    flor17 = document.getElementById('flor17'),
    texto = document.getElementById('text'),
    texto2 = document.getElementById('texto'),
    contador=0;

    function agregar(){
        if(contador==0){
            flor1.style.display="block";
            contador++;
            console.log(contador);
        }else if(contador==1){
            flor2.style.display="block";
            flor3.style.display="block";
            contador++;
            console.log(contador);
        }else if(contador==2){
            flor4.style.display="block";
            flor5.style.display="block";
            flor6.style.display="block";
            flor7.style.display="block";
            contador++;
            console.log(contador);
        }else if(contador==3){
            flor8.style.display="block";
            flor9.style.display="block";
            flor10.style.display="block";
            flor11.style.display="block";
            flor12.style.display="block";
            contador++;
            console.log(contador);
        }else if(contador==4){
            flor13.style.display="block";
            flor14.style.display="block";
            flor15.style.display="block";
            flor16.style.display="block";
            flor17.style.display="block";
            setTimeout(function(){
                text.style.display="block";
                texto2.style.display="block";
            }, 2000);
            console.log(contador);
        }
    }

    btn.addEventListener('click',agregar,true);
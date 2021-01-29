window.onload = function () {
    var iconos = ["\u2666", "\u2660", "\u2663", "\u2665"];
    /*
    var nombres = ["rombo", "espada", "trebol", "corazon"]
    */
    var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];



    const ubiAceptar = document.getElementById("btnAceptar");
    const ubiOrdenar = document.getElementById("btnOrdenar");
    let ubiCartas = document.querySelector("#cartas");
    var numCartas = [];

    ubiAceptar.addEventListener("click", function () {
        numCartas = [];
        var cantidadCartas = document.getElementById("input1").value;
        ubiCartas.innerHTML = " ";
        

        for (let i = 0; i < cantidadCartas; i++) {



            let divi = document.createElement("DIV");
            divi.innerHTML = "<div class='icono1'></div><div class='numero'></div><div class='icono2'></div>";
            divi.classList.add("card");
            ubiCartas.appendChild(divi);


            var randomCard = Math.floor(Math.random() * 4);
            var random = Math.floor(Math.random() * 13);
            numCartas.push(random);
            


            var ubiIcono1 = document.getElementsByClassName("icono1");
            var ubiNumero = document.getElementsByClassName("numero");
            var ubiIcono2 = document.getElementsByClassName("icono2");


            if (randomCard == 0) {
                var simbolo1 = iconos[randomCard];
                ubiIcono1[i].innerHTML = simbolo1;
                var numero = numeros[random];
                ubiNumero[i].innerHTML = numero;
                var simbolo2 = iconos[randomCard];
                ubiIcono2[i].innerHTML = simbolo2;
                ubiIcono1[i].style.color = "red";
                ubiIcono2[i].style.color = "red";
                ubiNumero[i].style.color = "red";
            }

            else if (randomCard == 1) {
                var simbolo1 = iconos[randomCard];
                ubiIcono1[i].innerHTML = simbolo1;
                var numero = numeros[random];
                ubiNumero[i].innerHTML = numero;
                var simbolo2 = iconos[randomCard];
                ubiIcono2[i].innerHTML = simbolo2;

            }

            else if (randomCard == 2) {
                var simbolo1 = iconos[randomCard];
                ubiIcono1[i].innerHTML = simbolo1;
                var numero = numeros[random];
                ubiNumero[i].innerHTML = numero;
                var simbolo2 = iconos[randomCard];
                ubiIcono2[i].innerHTML = simbolo2;

            }

            else if (randomCard == 3) {
                var simbolo1 = iconos[randomCard];
                ubiIcono1[i].innerHTML = simbolo1;
                var numero = numeros[random];
                ubiNumero[i].innerHTML = numero;
                var simbolo2 = iconos[randomCard];
                ubiIcono2[i].innerHTML = simbolo2;
                ubiIcono1[i].style.color = "red";
                ubiIcono2[i].style.color = "red";
                ubiNumero[i].style.color = "red";
            }

        }



    });

    ubiOrdenar.addEventListener("click", function () {

        BubbleSort(numCartas);
    });

    function BubbleSort(arr) {
        
        let fin = arr.length - 1;
        while (fin > 0) {
            for (let i = 0; i <= fin; i++) {
                if (arr[i] > arr[i + 1]) {
                    let vacio = arr[i + 1];
                    arr[i + 1] = arr[i];
                    arr[i] = vacio;

                    let vacio2 = ubiCartas.children[i + 1].innerHTML;
                    ubiCartas.children[i + 1].innerHTML = ubiCartas.children[i].innerHTML;
                    ubiCartas.children[i].innerHTML = vacio2;

                }
                delay(i);


            }
            function delay(i) {
                setTimeout(() => {
                    i;
                }, 10000);
            }

            fin--;
        }
        

    }

}
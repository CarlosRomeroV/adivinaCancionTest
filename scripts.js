
let numeroActual = 0;

// FUNCION PARA CAMBIAR EL COLOR DEL BOTON CUANDO SE ACIERTA
function cambiarColor() {
    const botonVerde=document.getElementById("botonAdivinar")
    botonVerde.style.backgroundColor = "green";

setTimeout(() => {
        botonVerde.style.backgroundColor = ""; 
    }, 700); 
}
///////////////////////////////////////////////////////////////////////////////

// FUNCION PARA RECIBIR EL TEXTO Y VERIFICAR SI ESTÁ BIEN O MAL
// ADEMAS, TAMBIEN SUMARA 1 CONTADOR SI ES CORRECTO PARA SABER EN Q PREGUNTA ESTAMOS

function recibirTexto() {
    const n1 = document.getElementById("n1").value;
    const n2 = document.getElementById("n2").value;
    const n3 = document.getElementById("n3").value;
    const n4 = document.getElementById("n4").value;
    const n5 = document.getElementById("n5").value;
    const n6 = document.getElementById("n6").value;
    const n7 = document.getElementById("n7").value;
    const n8 = document.getElementById("n8").value;


    const c1 = document.getElementById("n1")
    const c2 = document.getElementById("n2")
    const c3 = document.getElementById("n3")
    const c4 = document.getElementById("n4")
    const c5 = document.getElementById("n5")
    const c6 = document.getElementById("n6")
    const c7 = document.getElementById("n7")
    const c8 = document.getElementById("n8")




    let aciertos = [false, false, false, false, false, false, false, false]

    // ARRAY CON LAS RESPUESTAS CORRECTAS PARA LOS VALORES DE LAS CAJAS EN ORDEN DEL N1 AL N8
    const respuestas = [
         ['riverland', 'swag', '', '', '', '', '', ''], 
         ['encontrar', 'vidas', 'atraviesas', 'tírame', 'alucinar', 'magia', 'cristal', 'cógeme']
        ]

            if ((n1)== (respuestas[numeroActual][0])) {aciertos[0]=true; c1.style.backgroundColor = "lightgreen"}
             else {c1.style.backgroundColor =  "#ff7171"}
            if ((n2)== (respuestas[numeroActual][1])) {aciertos[1]=true; c2.style.backgroundColor = "lightgreen"} 
            else {c2.style.backgroundColor =  "#ff7171"}
            if ((n3)== (respuestas[numeroActual][2])) {aciertos[2]=true; c3.style.backgroundColor = "lightgreen"} 
            else {c3.style.backgroundColor =  "#ff7171"}
            if ((n4)== (respuestas[numeroActual][3])) {aciertos[3]=true; c4.style.backgroundColor = "lightgreen"} 
            else {c4.style.backgroundColor =  "#ff7171"}
            if ((n5)== (respuestas[numeroActual][4])) {aciertos[4]=true; c5.style.backgroundColor = "lightgreen"} 
            else {c5.style.backgroundColor =  "#ff7171"}
            if ((n6)== (respuestas[numeroActual][5])) {aciertos[5]=true; c6.style.backgroundColor = "lightgreen"} 
            else {c6.style.backgroundColor =  "#ff7171"}
            if ((n7)== (respuestas[numeroActual][6])) {aciertos[6]=true; c7.style.backgroundColor = "lightgreen"}
            else {c7.style.backgroundColor =  "#ff7171"} 
            if ((n8)== (respuestas[numeroActual][7])) {aciertos[7]=true; c8.style.backgroundColor = "lightgreen"} 
            else {c8.style.backgroundColor =  "#ff7171"}


            let todoBien = 0;
            for (let p = 0; p < 8; p++) {  
                if (aciertos[p] == true) {
                    
                    todoBien++;
                }
            }
           
            if (todoBien == 8) {
                resuelto();
                numeroActual++;
            } else {
                mensajeError.style.display = "block";

                let errores = localStorage.getItem("errores") || 0; // Obtener el contador del localStorage
                errores = parseInt(errores) + 1; // Incrementar el contador
                localStorage.setItem("errores", errores); 

                document.getElementById("contadorErrores").innerText = "Número de fallos: " + errores;
            }

         
            // CAMBIAMOS LA ESTRUCTURA DEL HTML /////////////////////////////////////////////
            setTimeout(() => {
            if ((todoBien == 8)&&(numeroActual==1)){
                const contenidoDiv = document.getElementById("contenido");

                // Cambiar el contenido HTML
                contenidoDiv.innerHTML = `
               <i1 id="nombreArtista">?????</i1> &nbsp------&nbsp <i2 id="nombreCancion">  ?????????</i2>
    <img class="canciones" src="https://thumbs.dreamstime.com/z/d-personaje-de-dibujos-animados-signo-interrogaci%C3%B3n-115495887.jpg" id="foto"/>
                <label for="n1" id="t1">Te he vuelto a </label>
                <input type="text" id="n1" name="n1">
                <label for="n2" id="t2">, una vez más como en </label>
                <input type="text" id="n2" name="n2">
                <label for="n3" id="t3"> atrás. Santos mantas, </label>
                <input type="text" id="n3" name="n3">
                <label for="n4" id="t4"> de una mi aura. Shawty </label>
                <input type="text" id="n4" name="n4">
                <label for="n5" id="t5"> agua, y empecé a  </label>
                <input type="text" id="n5" name="n5">
                <label for="n6" id="t6">. Quizá sea </label>
                <input type="text" id="n6" name="n6">
                <label for="n7" id="t7">o el LSD en </label>
                <input type="text" id="n7" name="n7">
                <label for="n8" id="t8">Oh, ella me la aplicó </label>
                <input type="text" id="n8" name="n8"> en el hotel
                `;

                
            }


            /////////////////////////////////////////////////////////////////////////////

            if ((todoBien == 8)&&(numeroActual==2)){
                const contenidoDiv = document.getElementById("contenido");

                // Cambiar el contenido HTML
                contenidoDiv.innerHTML = `
                <div><i1 id="nombreArtista">?????</i1> &nbsp------&nbsp <i2 id="nombreCancion">  ?????????</i2>
    <img class="canciones" src="https://thumbs.dreamstime.com/z/d-personaje-de-dibujos-animados-signo-interrogaci%C3%B3n-115495887.jpg" id="foto"/>
                <label for="n1" id="t1">Y a los de </label>
                <input type="text" id="n1" name="n1">
                <label for="n2" id="t2">de nada por el </label>
                <input type="text" id="n2" name="n2">
                <label for="n3" id="t3">frase3 </label>
                <input type="text" id="n3" name="n3">
                <label for="n4" id="t4">frase4 </label>
                <input type="text" id="n4" name="n4">
                <label for="n5" id="t5">frase5 </label>
                <input type="text" id="n5" name="n5">
                <label for="n6" id="t6">frase6 </label>
                <input type="text" id="n6" name="n6">
                <label for="n7" id="t7">frase7 </label>
                <input type="text" id="n7" name="n7">
                <label for="n8" id="t8">frase8 </label>
                <input type="text" id="n8" name="n8"> 
                `;

                
            }

            if ((todoBien == 8)&&(numeroActual==3)){
                const contenidoDiv = document.getElementById("contenido");

                // Cambiar el contenido HTML
                contenidoDiv.innerHTML = `
                <div><i1 id="nombreArtista">?????</i1> &nbsp------&nbsp <i2 id="nombreCancion">  ?????????</i2>
    <img class="canciones" src="https://thumbs.dreamstime.com/z/d-personaje-de-dibujos-animados-signo-interrogaci%C3%B3n-115495887.jpg" id="foto"/>
                <label for="n1" id="t1">Y a los de </label>
                <input type="text" id="n1" name="n1">
                <label for="n2" id="t2">de nada por el </label>
                <input type="text" id="n2" name="n2">
                <label for="n3" id="t3">frase3 </label>
                <input type="text" id="n3" name="n3">
                <label for="n4" id="t4">frase4 </label>
                <input type="text" id="n4" name="n4">
                <label for="n5" id="t5">frase5 </label>
                <input type="text" id="n5" name="n5">
                <label for="n6" id="t6">frase6 </label>
                <input type="text" id="n6" name="n6">
                <label for="n7" id="t7">frase7 </label>
                <input type="text" id="n7" name="n7">
                <label for="n8" id="t8">frase8 </label>
                <input type="text" id="n8" name="n8"> 
                `;

                
            }

            if ((todoBien == 8)&&(numeroActual==4)){
                const contenidoDiv = document.getElementById("contenido");

                // Cambiar el contenido HTML
                contenidoDiv.innerHTML = `
                <div><i1 id="nombreArtista">?????</i1> &nbsp------&nbsp <i2 id="nombreCancion">  ?????????</i2>
    <img class="canciones" src="https://thumbs.dreamstime.com/z/d-personaje-de-dibujos-animados-signo-interrogaci%C3%B3n-115495887.jpg" id="foto"/>
                <label for="n1" id="t1">Y a los de </label>
                <input type="text" id="n1" name="n1">
                <label for="n2" id="t2">de nada por el </label>
                <input type="text" id="n2" name="n2">
                <label for="n3" id="t3">frase3 </label>
                <input type="text" id="n3" name="n3">
                <label for="n4" id="t4">frase4 </label>
                <input type="text" id="n4" name="n4">
                <label for="n5" id="t5">frase5 </label>
                <input type="text" id="n5" name="n5">
                <label for="n6" id="t6">frase6 </label>
                <input type="text" id="n6" name="n6">
                <label for="n7" id="t7">frase7 </label>
                <input type="text" id="n7" name="n7">
                <label for="n8" id="t8">frase8 </label>
                <input type="text" id="n8" name="n8"> 
                `;

                
            }

            if ((todoBien == 8)&&(numeroActual==5)){
                const contenidoDiv = document.getElementById("contenido");

                // Cambiar el contenido HTML
                contenidoDiv.innerHTML = `
                <div><i1 id="nombreArtista">?????</i1> &nbsp------&nbsp <i2 id="nombreCancion">  ?????????</i2>
    <img class="canciones" src="https://thumbs.dreamstime.com/z/d-personaje-de-dibujos-animados-signo-interrogaci%C3%B3n-115495887.jpg" id="foto"/>
                <label for="n1" id="t1">Y a los de </label>
                <input type="text" id="n1" name="n1">
                <label for="n2" id="t2">de nada por el </label>
                <input type="text" id="n2" name="n2">
                <label for="n3" id="t3">frase3 </label>
                <input type="text" id="n3" name="n3">
                <label for="n4" id="t4">frase4 </label>
                <input type="text" id="n4" name="n4">
                <label for="n5" id="t5">frase5 </label>
                <input type="text" id="n5" name="n5">
                <label for="n6" id="t6">frase6 </label>
                <input type="text" id="n6" name="n6">
                <label for="n7" id="t7">frase7 </label>
                <input type="text" id="n7" name="n7">
                <label for="n8" id="t8">frase8 </label>
                <input type="text" id="n8" name="n8"> 
                `;

                
            }

            if ((todoBien == 8)&&(numeroActual==6)){
                const contenidoDiv = document.getElementById("contenido");

                // Cambiar el contenido HTML
                contenidoDiv.innerHTML = `
                <div><i1 id="nombreArtista">?????</i1> &nbsp------&nbsp <i2 id="nombreCancion">  ?????????</i2>
    <img class="canciones" src="https://thumbs.dreamstime.com/z/d-personaje-de-dibujos-animados-signo-interrogaci%C3%B3n-115495887.jpg" id="foto"/>
                <label for="n1" id="t1">Y a los de </label>
                <input type="text" id="n1" name="n1">
                <label for="n2" id="t2">de nada por el </label>
                <input type="text" id="n2" name="n2">
                <label for="n3" id="t3">frase3 </label>
                <input type="text" id="n3" name="n3">
                <label for="n4" id="t4">frase4 </label>
                <input type="text" id="n4" name="n4">
                <label for="n5" id="t5">frase5 </label>
                <input type="text" id="n5" name="n5">
                <label for="n6" id="t6">frase6 </label>
                <input type="text" id="n6" name="n6">
                <label for="n7" id="t7">frase7 </label>
                <input type="text" id="n7" name="n7">
                <label for="n8" id="t8">frase8 </label>
                <input type="text" id="n8" name="n8"> 
                `;

                
            }

            if ((todoBien == 8)&&(numeroActual==7)){
                const contenidoDiv = document.getElementById("contenido");

                // Cambiar el contenido HTML
                contenidoDiv.innerHTML = `
                <div><i1 id="nombreArtista">?????</i1> &nbsp------&nbsp <i2 id="nombreCancion">  ?????????</i2>
    <img class="canciones" src="https://thumbs.dreamstime.com/z/d-personaje-de-dibujos-animados-signo-interrogaci%C3%B3n-115495887.jpg" id="foto"/>
                <label for="n1" id="t1">Y a los de </label>
                <input type="text" id="n1" name="n1">
                <label for="n2" id="t2">de nada por el </label>
                <input type="text" id="n2" name="n2">
                <label for="n3" id="t3">frase3 </label>
                <input type="text" id="n3" name="n3">
                <label for="n4" id="t4">frase4 </label>
                <input type="text" id="n4" name="n4">
                <label for="n5" id="t5">frase5 </label>
                <input type="text" id="n5" name="n5">
                <label for="n6" id="t6">frase6 </label>
                <input type="text" id="n6" name="n6">
                <label for="n7" id="t7">frase7 </label>
                <input type="text" id="n7" name="n7">
                <label for="n8" id="t8">frase8 </label>
                <input type="text" id="n8" name="n8"> 
                `;

                
            }
        }, 1500);

   

  
}





/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

// PISTA 1 //////////////////////////////////////////////////////////////

function pista1() { 
    //hay q hacer un array de links y segun el id de la foto poner x link
    const links = ['https://cdns-images.dzcdn.net/images/cover/d72d42e3612f38fcafed5d08ebb497b3/0x1900-000000-80-0-0.jpg',
     'https://s.mxmcdn.net/images-storage/albums5/5/6/0/8/2/7/65728065_500_500.jpg', 
     'l3',
     'l4', 
     'l5',
     'l6', 
     'l7',
     'l8', 
     'l9',
     'l10', 
    ]

    const foto = document.getElementById("foto");

    for (let i=0; i<=numeroActual;i++){
        foto.src = links[i];
    }

    document.getElementById("pista1").remove(); 

}
//////////////////////////////////////////////////////////////////////

// PISTA 2 ///////////////////////////////////////////////////////////

function pista2() { 
    
    const artistas = ["El Bugg",
     "Mda",
     'a3',
     'a4',
     'a5',
     'a6',
     'a7',
     'a8',
     'a9',
     'a10',
    ]

    const textoArtista = document.getElementById("nombreArtista");

    for (let i=0; i<=numeroActual;i++){
        textoArtista.textContent = artistas[i];
    }

    document.getElementById("pista2").remove(); 

}
/////////////////////////////////////////////////////////////////////////

// PISTA 3 //////////////////////////////////////////////////////////////
function pista3() { 
    
    const canciones = ["Amy",
     "Infinite Azure",
     'a3',
     'a4',
     'a5',
     'a6',
     'a7',
     'a8',
     'a9',
     'a10',
    ]

    const textoCanciones = document.getElementById("nombreCancion");

    for (let i=0; i<=numeroActual;i++){
        textoCanciones.textContent = canciones[i];
    }

    document.getElementById("pista3").remove(); 

}

function resuelto(){

    //PARA MOSTRAR LA PANTALLA DE RESOLUCIÓN ACTIVAREMOS TODAS LAS PISTAS PERO SIN BORRAR LOS BOTONES

    const links = ['https://cdns-images.dzcdn.net/images/cover/d72d42e3612f38fcafed5d08ebb497b3/0x1900-000000-80-0-0.jpg',
     'l2', 
     'l3',
     'l4', 
     'l5',
     'l6', 
     'l7',
     'l8', 
     'l9',
     'l10', 
    ]

    const foto = document.getElementById("foto");

    const artistas = ["El Bugg",
    "roju",
    'a3',
    'a4',
    'a5',
    'a6',
    'a7',
    'a8',
    'a9',
    'a10',
   ]
   const textoArtista = document.getElementById("nombreArtista");

   const canciones = ["Amy",
     "a2",
     'a3',
     'a4',
     'a5',
     'a6',
     'a7',
     'a8',
     'a9',
     'a10',
    ]

    const textoCanciones = document.getElementById("nombreCancion");

    for (let i=0; i<=numeroActual;i++){
        textoCanciones.textContent = canciones[i];
        textoArtista.textContent = artistas[i];
        foto.src = links[i];
    }

}

// ESTA IGUAL NO FUNCIONA XRO DA IWAL PQ AL FINAL NO SE VA A USAR ES SOLO PA TESTEO
function resolver(){
    todoBien=8;
}
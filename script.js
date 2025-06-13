window.onload = function() {
    let sujeto = ["An old comedian ", "A man ", "My dog "];
    let accion = ["eat ", "broke ", "throw "];
    let objeto = ["my homework ", "my hotdog ", "my sandwich "];
    let lugar = ["in the street", "in the bus station", "in the school"];
  
    let parte1 = Math.floor(Math.random() * sujeto.length);
    let parte2 = Math.floor(Math.random() * accion.length);
    let parte3 = Math.floor(Math.random() * objeto.length);
    let parte4 = Math.floor(Math.random() * lugar.length);

    document.querySelector("#excusa").innerHTML = sujeto[parte1] + accion[parte2] + objeto[parte3] + lugar[parte4];
    
  }
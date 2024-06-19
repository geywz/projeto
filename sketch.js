let palavra
function setup() {
  createCanvas(400, 400);
;

  palavra = palavraAleatoria();
  
}

function palavraAleatoria() {
  
  let palavras = ["geo", "vana", "bailao"];
  
  return random(palavras);
}

function inicializaCores() {
  background("white");
  fill("pink");
  textSize(64);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(7, quantidade);
  return parcial;
}

function draw() {
  
  inicializaCores();

  let parcial = palavraParcial(6, width);
    
  text(parcial, 200, 200);
  
}


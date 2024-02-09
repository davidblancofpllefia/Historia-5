import { modeloPieza } from "./clase";
import { models } from "./models";

export const panel = {
  matriz: [
  [1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1], 
],
pintaPanel() {
  let HTML = ""; 

  panel.matriz.forEach((fila) => {
      HTML += `<div class="fila d-flex justify-content-center">`;
      fila.forEach((valorCelda) => {
          HTML += `<div class="celda">${valorCelda}</div>`;
      });
      HTML += `</div>`;
  });

  const panelDiv = document.getElementById("panel");
  panelDiv.innerHTML = HTML; 
},

  crearNuevaPieza :() => {     
    const modelo = new Math.floor(Math.random() * 6);
    const longitud = models[modelo][0]
    if (longitud < 12) {
      x = Math.floor(Math.random() * (13 - longitud)); 
  } else {
      x = 0; 
  }
  },

  nuevaPieza: [

  ],
  insertarPieza :(pieza) => { 
    const x = pieza.x;
    const y = pieza.y;
    console.log(pieza)
    for(y=0;y>panel.nuevaPieza.altura;y++){
        for(x=0;x>panel.nuevaPieza.anchura;x++){
          this.matriz[pieza.y + i][pieza.x + j] = pieza.matriz[i][j];
        }
    }
  }
};
panel.pintaPanel();
console.log(panel.matriz)













export class modeloPieza {
    constructor(modelo, angulo = 0, matriz, x = 0, y = 0) {
      this.modelo = modelo;
      this.angulo = angulo;
      this.matriz = matriz;
      this.x = x;
      this.y = y;
      this.longitud = matriz[0].length;
      this.altura = matriz.length;
    }
  
    girar = () => {      
      this.angulo = (this.angulo + 1) % 4;
    }


  }

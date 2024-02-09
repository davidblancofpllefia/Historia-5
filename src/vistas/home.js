export const home = {
    template: //html
    `
		<body class="text-light">
			<header class="d-flex align-items-center justify-content-center">
				<img src="img/logo.png" alt="logo" width="200" class="mt-5" />
			</header>
			<main class="container mt-5 bg-opacity-50 bg-dark p-2">
				<!-- Pantalla de introducción -->
		  <div id="intro" class="text-center p-5">
			<p>Tetris és un videojoc de tipus trencaclosques. Fou inventat per l'enginyer informàtic rus Aleksei Pàjitnov l'any 1984,[1] mentre treballava a l'Acadèmia de Ciències de Moscou.</p>
			<h2>Instruccions:</h2>
			<p>Pots moure les peces fent servir les fletxes d'esquerra i dreta</p>
			<p>Amb la fletxa avall pots girar la peça</p>
			<p>'<strong>Ñ</strong>' per canviar la peça actual per la peça que està a punt de sortir (que pots veure a la columna de la dreta)</p>
			<p>Al final de la partida podràs desar la teva puntuació, i verue el ranking de jugadors</p>
			<button class="btn btn-success fs-1 mt-5" id="botonHome">HOME</button>
			<button class="btn btn-success fs-1 mt-5" id="botonJugar">JUGAR</button>
			<button class="btn btn-success fs-1 mt-5" id="botonRanking">RANKING</button>
					<hr>
		  </div>
				<!-- Pantalla tablas y ranking -->
				<div id="info" class="">
					<div id="partidas" class="m-5 p-5 bg-dark">
						<h2 class="text-center text-light">Ranking</h2>
						<table class="table table-dark align-middle" id="Ranking">
							<theader>
								<tr class="bg-dark">
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
							</theader>
							<tbody>
								<tr>
									<td class="fs-2">1</td>
									<td><img src="" alt="avatar" /></td>
									<td>ANDER</td>
									<td>1255</td>
								</tr>
								<tr>
									<td class="fs-2">2</td>
									<td><img src="" alt="avatar" /></td>
									<td>ANDER</td>
									<td>1255</td>
								</tr>
								<tr>
									<td class="fs-2">3</td>
									<td><img src="" alt="avatar" /></td>
									<td>ANDER</td>
									<td>1255</td>
								</tr>
							</tbody>
							<tfoot></tfoot>
						</table>
					</div>
	
					<div id="partidas" class="m-5 p-5 bg-dark">
						<h2 class="text-center text-light">Partidas</h2>
						<div class="input-group mb-3">
							<input
								type="text"
								class="form-control"
								placeholder="Buscador"
								aria-label="Buscador"
								aria-describedby="button-addon2"
							/>
							<button
								class="btn btn-outline-secondary"
								type="button"
								id="button-addon2"
							>
								<i class="bi bi-x-lg"></i>
							</button>
						</div>
						<table class="table table-dark" id="partidas">
							<theader>
								<tr>
									<td></td>
									<td>Nick <i class="bi bi-arrow-up-square"></i></td>
									<td>Puntuación <i class="bi bi-arrow-up-square"></i></td>
									<td>Fecha <i class="bi bi-arrow-up-square"></i></td>
								</tr>
							</theader>
							<tbody>
								<tr>
									<td><img src="" alt="avatar" /></td>
									<td>ANDER</td>
									<td>10</td>
									<td>13 ABRIL 2023</td>
								</tr>
								<tr>
									<td><img src="" alt="avatar" /></td>
									<td>ANDER</td>
									<td>600</td>
									<td>13 FEBRERO 2023</td>
								</tr>
								<tr>
									<td><img src="" alt="avatar" /></td>
									<td>ANDER</td>
									<td>888</td>
									<td>1 ENERO 2023</td>
								</tr>
							</tbody>
							<tfoot></tfoot>
						</table>
					</div>
				</div>
				<!-- Pantalla del juego -->
				<div id="juego" class="d-none">
					<div class="row">
						<!-- Panel izquierda -->
						<div
							class="col-4 d-flex flex-column justify-content-end align-items-center p-5"
						>
							<h4>Nivel: <span>2</span></h4>
							<h4>Tiempo: <span>5:22</span></h4>
							<h4>Lineas: <span>2</span></h4>
							<h4>Puntos: <span>211122</span></h4>
						</div>
						<!-- Panel central -->
						<div class="col-4 d-flex justify-content-center">
							<div id="panel" class="p-5">
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
							</div>
						</div>
						<!-- Panel derecha -->
						<div
							class="col-4 d-flex flex-column justify-content-start align-items-center p-5"
						>
							<div id="piezaSiguiente">
								<h4>Pieza siguiente:</h4>
								<div class="piezaSiguiente m-2">
									<div class="fila d-flex justify-content-center">
										<div class="celda bg-primary bg-gradient border-dark">x</div>
										<div class="celda bg-dark border-secondary">x</div>
									</div>
									<div class="fila d-flex justify-content-center">
										<div class="celda bg-primary bg-gradient border-dark">x</div>
										<div class="celda bg-dark border-secondary">x</div>
									</div>
									<div class="fila d-flex justify-content-center">
										<div class="celda bg-primary bg-gradient border-dark">x</div>
										<div class="celda bg-primary bg-gradient border-dark">x</div>
									</div>
								</div>
								<div class="piezaSiguiente m-2">
									<div class="fila d-flex justify-content-center">
										<div class="celda bg-primary bg-gradient border-dark">x</div>
										<div class="celda bg-dark border-secondary">x</div>
									</div>
									<div class="fila d-flex justify-content-center">
										<div class="celda bg-primary bg-gradient border-dark">x</div>
										<div class="celda bg-dark border-secondary">x</div>
									</div>
									<div class="fila d-flex justify-content-center">
										<div class="celda bg-primary bg-gradient border-dark">x</div>
										<div class="celda bg-primary bg-gradient border-dark">x</div>
									</div>
								</div>
								<div class="piezaSiguiente m-2">
									<div class="fila d-flex justify-content-center">
										<div class="celda bg-primary bg-gradient border-dark">x</div>
										<div class="celda bg-dark border-secondary">x</div>
									</div>
									<div class="fila d-flex justify-content-center">
										<div class="celda bg-primary bg-gradient border-dark">x</div>
										<div class="celda bg-dark border-secondary">x</div>
									</div>
									<div class="fila d-flex justify-content-center">
										<div class="celda bg-primary bg-gradient border-dark">x</div>
										<div class="celda bg-primary bg-gradient border-dark">x</div>
									</div>
								</div>
							</div>
							<hr />
							<div id="piezaGuardada">
								<h4>Pieza guardada:</h4>
								<div class="piezaGuardada">
									<div class="piezaSiguiente m-2">
										<div class="fila d-flex justify-content-center">
											<div class="celda bg-warning bg-gradient border-dark">x</div>
											<div class="celda bg-warning border-secondary">x</div>
										</div>
										<div class="fila d-flex justify-content-center">
											<div class="celda bg-warning bg-gradient border-dark">x</div>
											<div class="celda bg-warning border-secondary">x</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<script src="main.js"></script>
		</body>
	</html>
	
    `
}
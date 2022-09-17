
 const d = document;

 const $formScore = d.querySelector("#formScore");

 $formScore.addEventListener("submit",()=>{
  event.preventDefault();

  /* Equipos */
  const equipoA = $formScore.equipo1.value;
  const equipoB = $formScore.equipo2.value;

  /* Goles */
  const goalA = $formScore.gol1.value;
  const goalB = $formScore.gol2.value;

  /* variables */
  let punto;
  let puntob;
  let empate;
  let empateb;
  let ganado;
  let ganadosb;
  let perdido;
  let perdidob;
  let golesA;


  /* Oparar inputs para dar ouputs */

  if(goalA===goalB){
    empate=1; empateb=1;
    punto=1; puntob=1
  
  }
  else if(goalA>goalB){
    ganado=1; perdidob=1;
    punto=3; puntob=0
    
    
  }
  else if (goalB>goalA){
    ganadosb=1; perdido=1;
    puntob=3; punto=0
    
  }
  
  
  /* Crea Filas */
  const $trow = d.createElement("tr");
  const $trow2 = d.createElement("tr");

  const $tdata = d.createElement("td");

  const data1 = $tdata.cloneNode(true);
  const data2 = $tdata.cloneNode(true);
  const data3 = $tdata.cloneNode(true);
  const data4 = $tdata.cloneNode(true);
  const data5 = $tdata.cloneNode(true);
  const data6 = $tdata.cloneNode(true);

  const data7 = $tdata.cloneNode(true);
  const data8 = $tdata.cloneNode(true);
  const data9 = $tdata.cloneNode(true);
  const data10 = $tdata.cloneNode(true);
  const data11 = $tdata.cloneNode(true);
  const data12 = $tdata.cloneNode(true);

  /* Llenar filas A*/
  data1.innerText = equipoA;
  data2.innerText = goalA;
  data3.innerText = ganado;
  data4.innerText = perdido;
  data5.innerText = empate;
  data6.innerText = punto;

  /* Llenar filas B*/
  data7.innerText = equipoB;
  data8.innerText = goalB;
  data9.innerText = ganadosb;
  data10.innerText = perdidob;
  data11.innerText = empateb;
  data12.innerText = puntob;


  /* Aderir fila de a*/
  $fragment = d.createDocumentFragment();
  $fragment.appendChild(data1)
  $fragment.appendChild(data2)
  $fragment.appendChild(data3)
  $fragment.appendChild(data4)
  $fragment.appendChild(data5)
  $fragment.appendChild(data6)

  /* Aderir fila de b*/
  $fragment2 = d.createDocumentFragment();
  $fragment2.appendChild(data7)
  $fragment2.appendChild(data8)
  $fragment2.appendChild(data9)
  $fragment2.appendChild(data10)
  $fragment2.appendChild(data11)
  $fragment2.appendChild(data12)

  const $tabla = d.querySelector("#tabla")


  $trow.appendChild($fragment)
  $trow2.appendChild($fragment2)
  $tabla.appendChild($trow)
  $tabla.appendChild($trow2)

  
 })

const $deleteTable = d.querySelector("#delete");

$deleteTable.addEventListener("click",()=>{
  const $tabla = d.querySelector("#tabla");

  $tabla.innerHTML = ""
})



  
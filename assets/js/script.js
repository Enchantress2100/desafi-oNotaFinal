let nombre; //Pregunta sobre el nombre
nombre = prompt("¿Cuál es tu nombre?", "Consuelo");
document.getElementById('nombre').innerHTML= `Nombre: ${nombre} `;

let apellido; //Pregunta sobre el apellido
apellido = prompt("¿Cuál es tu apellido?", "Gómez");
document.getElementById('apellido').innerHTML= `Apellido: ${apellido} `;

let carrera; //Pregunta sobre Carrera
carrera = prompt("¿Cuál es tu carrera?", "Full Stack en JavaScript");
document.getElementById('carrera').innerHTML = `Carrera: ${carrera}`;

//pregunta sobre el primer ramo
const ramo1 = prompt("¿Cuál es tu primer asignatura?", "HTML");
const nota1Ramo1 = prompt(`Ingrese la primera nota de la asignatura ${ramo1}`,"4");//insertar primera nota html.
const nota2Ramo1= prompt(`Ingrese la segunda nota de la asignatura ${ramo1}`, "5");//insertar segunda nota html.
const nota3Ramo1 = prompt(`Ingrese la tercera nota de la asignatura ${ramo1}`, "4");//insertar tercera nota html.

let promedioNotasHTML; //suma y promedio notas html dejando dos decimales.
let sumaHTML = parseInt(nota1Ramo1)+parseInt(nota2Ramo1)+parseInt(nota3Ramo1);
let divisionHTML = (sumaHTML) / 3;
let operacionHTML= (divisionHTML).toFixed(2);


const ramo2 = prompt("¿Cuál es tu segunda asignatura?", "CSS");//se pregunta sobre la segunda asignatura.
const nota1Ramo2= prompt(`Ingrese la primera nota de la asignatura ${ramo2}`, "3");//insertar primera nota css.
const nota2Ramo2= prompt(`Ingrese la segunda nota de la asignatura ${ramo2}`, "4");//insertar segunda nota css.
const nota3Ramo2= prompt(`Ingrese la tercera nota de la asignatura ${ramo2}`, "5");//insertar tercera nota css.

let promedioNotasCSS;//suma y promedio notas css dejando dos decimales.
let sumaCSS = parseInt(nota1Ramo2)+parseInt(nota2Ramo2)+parseInt(nota3Ramo2);
let divisionCSS = (sumaCSS) / 3;
let operacionCSS= (divisionCSS).toFixed(2);

const ramo3 = prompt("¿Cuál es tu tercer asignatura?", "JavaScript");//se pregunta por la tercera asignatura.

const nota1Ramo3= prompt(`Ingrese la primera nota de la asignatura ${ramo3} `, "2"); //insertar primera nota JS.
const nota2Ramo3= prompt(`Ingrese la segunda nota de la asignatura ${ramo3}`, "6");//insertar segunda nota JS.
const notaRamo3 = prompt(`Ingrese la tercera nota de la asignatura ${ramo3}`, "4");//insertar tercera nota JS.

let nota3Ramo3 //descubrir nota 3 de JavaScript.
nota3Ramo3= parseInt(12) - (parseInt(nota1Ramo3)+parseInt(nota2Ramo3));
let terceraNotaJavaScript = (nota3Ramo3); 

let promedioNotasJavaScript//descubrir promedio JS.
sumaJavaScript= parseInt(nota1Ramo3)+parseInt(nota2Ramo3)+parseInt(nota3Ramo3);
divisionJavaScript = (sumaJavaScript) / 3;
operacionJavaScript= (divisionJavaScript).toFixed(2);

const notaAprobación = prompt("Ingrese la nota de aprobación","4");

document.getElementById('container').innerHTML = 
`<table class='table'>
 <thead class='bg-dark text-white'>
 <tr>
 <th scope='col'>Ramo</th>
 <th scope='col'>Nota 1</th>
 <th scope='col'>Nota 2</th>
 <th scope='col'>Nota 3</th>
 <th scope='col'>Promedio</th>
 </tr
 <thead>
 <tbody>
 <tr>
 <th scope='row'>${ramo1}</th>
 <td>${nota1Ramo1}</td>
 <td>${nota2Ramo1}</td>
 <td>${nota3Ramo1}</td>
 <td>${operacionHTML}</td>
 <tr>
 <tr>
 <th scope='row'>${ramo2}</th>
<td>${nota1Ramo2}</td>
<td>${nota2Ramo2}</td>
<td>${nota3Ramo2}</td>
<td>${operacionCSS}</td>
<tr>
<tr>
<th scope='row'>${ramo3}</th>
<td>${nota1Ramo3}</td>
<td>${nota2Ramo3}</td>
<td>-</td>
<td>-</td>
<tr>
</tbody>
</table>`

document.getElementById('aprobacion').innerHTML = 
`<table class='table'>
<tr>
<td scope='row'>
<p>Para aprobar el ramo JavaScript con nota 4.00, debes obtener un ${nota3Ramo3} como nota final.</p>
</td>
<tr>
</table>`
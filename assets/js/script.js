let nombre, respuesta1; //Pregunta sobre el nombre
nombre = prompt("¿Cuál es tu nombre?", "Consuelo");
respuesta1= `Nombre: ${nombre} `;
document.write(respuesta1);

let apellido, respuesta2; //Pregunta sobre el apellido
apellido = prompt("¿Cuál es tu apellido?", "Gómez");
respuesta2= `<br>Apellido: ${apellido} `;
document.write(respuesta2);

let carrera, respuesta3; //Pregunta sobre Carrera, con salto de línea.
carrera = prompt("¿Cuál es tu carrera?", "Full Stack en JavaScript");
respuesta3=`<br>Carrera: ${carrera}`;
document.write(respuesta3);

const ramo1 = prompt("¿Cuál es tu primer asignatura?", "HTML");//se pregunta sobre la primera asignatura.

const ramo2= prompt("¿Cuál es tu segunda asignatura?", "CSS");//se pregunta sobre la segunda asignatura.

const ramo3 = prompt("¿Cuál es tu tercer asignatura?", "JavaScript");//se pregunta por la tercera asignatura.

const notaAprobación = prompt("Ingrese la nota de aprobación","4");

const nota1Ramo1= prompt("Ingrese la primera nota de la asignatura " + ramo1, "4");//insertar primera nota html.
const nota2Ramo1= prompt("Ingrese la segunda nota de la asignatura " + ramo1, "5");//insertar segunda nota html.
const nota3Ramo1= prompt("Ingrese la tercera nota de la asignatura " + ramo1, "4");//insertar tercera nota html.

let promedioNotasHTML; //suma y promedio notas html dejando dos decimales.
sumaHTML = parseInt(nota1Ramo1)+parseInt(nota2Ramo1)+parseInt(nota3Ramo1);
divisionHTML = (sumaHTML) / 3;
operacionHTML= (divisionHTML).toFixed(2);

const nota1Ramo2= prompt("Ingrese la primera nota de la asignatura " + ramo2, "3");//insertar primera nota css.
const nota2Ramo2= prompt("Ingrese la segunda nota de la asignatura " + ramo2, "4");//insertar segunda nota css.
const nota3Ramo2= prompt("Ingrese la tercera nota de la asignatura " + ramo2, "5");//insertar tercera nota css.

let promedioNotasCSS;//suma y promedio notas css dejando dos decimales.
sumaCSS = parseInt(nota1Ramo2)+parseInt(nota2Ramo2)+parseInt(nota3Ramo2);
divisionCSS = (sumaCSS) / 3;
operacionCSS= (divisionCSS).toFixed(2);

const nota1Ramo3= prompt("Ingrese la primera nota de la asignatura " + ramo3, "2"); //insertar primera nota JS.
const nota2Ramo3= prompt("Ingrese la segunda nota de la asignatura " + ramo3, "6");//insertar segunda nota JS.
const notaRamo3= prompt("Ingrese la tercera nota de la asignatura " + ramo3, "4");//insertar tercera nota JS.


let nota3Ramo3 //descubrir nota 3 de JavaScript.
nota3Ramo3= parseInt(12) - (parseInt(nota1Ramo3)+parseInt(nota2Ramo3));
terceraNotaJavaScript = (nota3Ramo3); 

let promedioNotasJavaScript//descubrir promedio JS.
sumaJavaScript= parseInt(nota1Ramo3)+parseInt(nota2Ramo3)+parseInt(nota3Ramo3);
divisionJavaScript = (sumaJavaScript) / 3;
operacionJavaScript= (divisionJavaScript);


document.write("<div class='container'>");
document.write("<table class='table'>");
document.write("<thead class='bg-dark text-white'>");
document.write("<tr>");
document.write("<th scope='col'>Ramo</th>");
document.write("<th scope='col'>Nota 1</th>");
document.write("<th scope='col'>Nota 2</th>");
document.write("<th scope='col'>Nota 3</th>");
document.write("<th scope='col'>Promedio</th>");
document.write("</tr");
document.write("<thead>");
document.write("<tbody>");
document.write("<tr>");
document.write("<th scope='row'>"+ramo1+"</th>");
document.write("<td>"+nota1Ramo1+"</td>");
document.write("<td>"+nota2Ramo1+"</td>");
document.write("<td>"+nota3Ramo1+"</td>");
document.write("<td>"+operacionHTML+"</td>");
document.write("<tr>");
document.write("<tr>");
document.write("<th scope='row'>"+ramo2+"</th>");
document.write("<td>"+nota1Ramo2+"</td>");
document.write("<td>"+nota2Ramo2+"</td>");
document.write("<td>"+nota3Ramo2+"</td>");
document.write("<td>"+operacionCSS+"</td>");
document.write("<tr>");
document.write("<tr>");
document.write("<th scope='row'>"+ramo3+"</th>");
document.write("<td>"+nota1Ramo3+"</td>");
document.write("<td>"+nota2Ramo3+"</td>");
document.write("<td>-</td>");
document.write("<td>-</td>");
document.write("<tr>");
document.write("</tbody>");
document.write("</table");
document.write("</div>");

document.write("<div>");
document.write("<table>");
document.write("<tr>");
document.write("<td scope='row'><p>Para aprobar el ramo JavaScript con nota 4.00, debes obtener un "+nota3Ramo3+" como nota final.</p></td>");
document.write("<tr>");
document.write("</table>")
document.write("</div>");

























/**

             Imagenes tomadas al azar de Google
             ALUMNO: LEANDRO FERREYRA T.
 */

document.getElementById("dni").addEventListener('click', function imgagen(params) {
  imagen = '<img src="dni.jpg" alt="Mi DNI" height="300px" width="300px" />'
  document.getElementById('links').innerHTML = imagen;
  
});


document.getElementById("analitico").addEventListener('click', function imgagen(params) {
  imagen = '<img src="analitico.jpg" alt="Mi Certidicado Analitico" height="300px" width="300px" />'
  document.getElementById('links').innerHTML = imagen;

  
});

document.getElementById("recomendacion").addEventListener('click', function imgagen(params) {
  imagen = '<img src="recomendacion.png" alt="Carta de Recomendacion" height="300px" width="300px" />'
  document.getElementById('links').innerHTML = imagen;

  
});

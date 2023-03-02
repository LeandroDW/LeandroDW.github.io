
/**

             Imagenes tomadas al azar de Google
             ALUMNO: LEANDRO FERREYRA T.
 */

document.getElementById("dni").addEventListener('click', function imgagen(params) {
  imagen = '<img src="https://www.laopinionsemanario.com.ar/wp-content/uploads/2021/10/DNI-Abraham.jpg" alt="Mi DNI" height="300px" width="300px" />'
  document.getElementById('links').innerHTML = imagen;
  
});


document.getElementById("analitico").addEventListener('click', function imgagen(params) {
  imagen = '<img src="https://www.fcq.unc.edu.ar/sites/default/files/styles/noticias/public/noticias/titulo_secundario.jpg?itok=kzcCXodz" alt="Mi Certidicado Analitico" height="300px" width="300px" />'
  document.getElementById('links').innerHTML = imagen;

  
});

document.getElementById("recomendacion").addEventListener('click', function imgagen(params) {
  imagen = '<img src="https://asesorias.com/empresas/wp-content/uploads/2019/11/Carta-de-recomendacion-ejemplo-01.png" alt="Carta de Recomendacion" height="300px" width="300px" />'
  document.getElementById('links').innerHTML = imagen;

  
});
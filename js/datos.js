const div_contacto1 = document.querySelector('.contacto1')
const div_direccion = document.querySelector('.direccion')
const div_nombre_oficio = document.querySelector('.nombre_oficio')
const div_box_experiencia = document.querySelector('.box_experiencia')
const div_box_formacion = document.querySelector('.box_formacion')

function cargar_datos() {
    div_contacto1.insertAdjacentHTML('beforeend', `
    <div class="linea">
    <div class="icono">
        <img src="imagen/contacto.png" alt="">
    </div>
    <div class="texto">
        <p>0388155149284</p>
    </div>
</div>

<div class="linea">
    <div class="icono">
        <img src="imagen/contacto.png" alt="">
    </div>
    <div class="texto">
        <p>luisnsk@gmail.com</p>
    </div>
</div>

<div class="linea">
    <div class="icono">
        <img src="imagen/contacto.png" alt="">
    </div>
    <div class="texto">
        <p><a class="link_linkedin" target="_blank" href="https://www.linkedin.com/in/luis-rodriguez-9928b5202/">www.linkedin.com/in/luis-<br>rodriguez-9928b5202/</a></p>
    </div>
</div>`)

    div_direccion.insertAdjacentHTML('beforeend', ` <div class="linea">
<div class="icono">
    <img src="imagen/home.png" alt="">
</div>
<div class="texto">
    <p>Cerro Centinela 773</p>
</div>
</div>

<div class="linea">
<div class="icono">
    <img src="imagen/home.png" alt="">
</div>
<div class="texto">
    <p>19 de abril</p>
</div>
</div>

<div class="linea">
<div class="icono">
    <img src="imagen/home.png" alt="">
</div>
<div class="texto">
    <p>San Salvador de Jujuy</p>
</div>
</div>

<div class="linea">
<div class="icono">
    <img src="imagen/home.png" alt="">
</div>
<div class="texto">
    <p>Jujuy</p>
</div>
</div>

<div class="linea">
<div class="icono">
    <img src="imagen/home.png" alt="">
</div>
<div class="texto">
    <p>Argentina</p>
</div>
</div>`)

    div_nombre_oficio.insertAdjacentHTML('beforeend', `<div class="apellido">
<p>Rodriguez Burgos</p>
</div>

<div class="nombre">
<p>Luis Alberto</p>
</div>

<div class="oficio">
<p>Programador Web</p>
</div>`)

    div_box_experiencia.insertAdjacentHTML('beforeend', `<div class="box_item">
<div class="lugar_trabajo">
    <p>Universidada Nacional de Jujuy</p>
</div>
<div class="puesto">
    <p>Programador Web - FullStack</p>
</div>
<div class="descripcion">
<p>Diseño, desarrollo y mantenimiento de sistemas web a medida, utilizando tecnologias html, css, javascript, php, mysql y git, aplicando conceptos de plantilla, responsive design, MVC, POO y micro servicios.</p>
<p>Desarrollos:</p>
<ul>
<li><p>Sistema portal de noticias.</p></li>
<li><p>Sistema gestor de contenidos, sitios web de información institucional, oferta académica, etc.</p></li>
<li><p>Sistema de inscripción.</p></li>
<li><p>Sistema de procesamientos de datos y generador de informes.</p></li>
</ul>
</div>
</div>
`)

    div_box_formacion.insertAdjacentHTML('beforeend', `<div class="box_item">
<div class="lugar">
    <p>Instituto de educación superior N°5 Prof. Jose Eugenio Tello
    </p>
</div>
<div class="titulo_formacion">
<ul>
<li><p>Técnico superior en informática con orientación a la administración contable</p></li>
</ul>    

</div>
</div>
<div class="box_item">
<div class="lugar">
    <p>Platzi</p>
</div>
<div class="titulo_formacion">
<ul>
<li><a target="_blank" href="https://platzi.com/p/luis-ro/curso/1050-programacion-basica/diploma/detalle/"><p>Curso Gratis de Programación Básica - Link</p></a></li>
<li> <a target="_blank" href="https://platzi.com/p/luis-ro/curso/1557-git-github/diploma/detalle/"><p>Curso Profesional de Git y GitHub - Link</p></a></li>
<li><a target="_blank" href="https://platzi.com/p/luis-ro/curso/1650-prework-2019/diploma/detalle/"><p>Curso de Prework: Buenas Prácticas y Entorno de Desarrollo en macOS 2019 - Link</p></a></li>
<li><a target="_blank" href="https://platzi.com/p/luis-ro/curso/1640-frontend-developer-2019/diploma/detalle/"><p>Curso de Frontend Developer 2019 - Link</p></a></li>
<li><a target="_blank" href="https://platzi.com/p/luis-ro/curso/1814-basico-javascript/diploma/detalle/"><p>Curso Básico de JavaScript - Link</p></a></li>
<li><a target="_blank" href="https://platzi.com/p/luis-ro/curso/1339-fundamentos-javascript-2018/diploma/detalle/"><p>Fundamentos de JavaScript 2018 - Link</p></a></li>
<li><a target="_blank" href="https://platzi.com/p/luis-ro/curso/1815-ecmascript-6/diploma/detalle/"><p>Curso de ECMAScript 6+ - Link</p></a></li>
<li><a target="_blank" href="https://platzi.com/p/luis-ro/curso/1789-asincronismo-js/diploma/detalle/"><p>Curso de Asincronismo con JavaScript - Link</p></a></li>
<li><a target="_blank" href="https://platzi.com/p/luis-ro/curso/1642-javascript-profesional/diploma/detalle/"><p>Curso Profesional de JavaScript - Link</p></a></li>
</ul>
</div>
</div>
`)

}

cargar_datos()
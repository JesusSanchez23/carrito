const carrito = document.querySelector("#carrito");

const listaCursos = document.querySelector("#lista-cursos");
const vaciarCarrito = document.querySelector("#vaciar-carrito");

const contenedorCarrito = document.querySelector("#lista-carrito tbody");

iniciarEventos();
function iniciarEventos() {
  // cuando agregas un curso presionando agregar al carrito
  listaCursos.addEventListener("click", agregarCurso);
}

function agregarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement;

    leerDatosCurso(cursoSeleccionado);
  }
}

// lee el contenido del HTML y extrae la información del curso

function leerDatosCurso(e) {
  console.log(e);

  // crear un objeto con el contenido del curso actual
  const infoCurso = {
    imagen: e.querySelector("img").src,
    titulo: e.querySelector("h4").textContent,
    precio: e.querySelector(".precio span").textContent,
    id: e.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  console.log(infoCurso);
}

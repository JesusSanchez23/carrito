const carrito = document.querySelector("#carrito");

const listaCursos = document.querySelector("#lista-cursos");
const vaciarCarrito = document.querySelector("#vaciar-carrito");

const contenedorCarrito = document.querySelector("#lista-carrito tbody");

let articulosCarrito = [];

iniciarEventos();

function iniciarEventos() {
  // cuando agregas un curso presionando agregar al carrito
  listaCursos.addEventListener("click", agregarCurso);

  // elimina cursos del carrito

  carrito.addEventListener("click", eliminarCurso);

  // vaciar el carrito

  vaciarCarrito.addEventListener("click", () => {
    articulosCarrito = [];
    limpiarHTML();
  });
}

function agregarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement;

    leerDatosCurso(cursoSeleccionado);
  }
}
// eliminar curso

function eliminarCurso(e) {
  // console.log(e.target.classList);
  if (e.target.classList.contains("borrar-curso")) {
    // console.log(e.target.getAttribute("data-id"));
    const cursoId = e.target.getAttribute("data-id");

    //elimina del arreglo articulos carrito por el data-id
    articulosCarrito = articulosCarrito.filter((curso) => curso.id !== cursoId);

    carritoHTML();
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

  // agrega elementos al arreglo de carrito

  //revisa si un elemento ya existe en el carrito

  const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);

  if (existe) {
    // actualizamos la cantidad
    const cursos = articulosCarrito.map((curso) => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
        return curso;
      } else {
        return curso;
      }
    });
    articulosCarrito = [...cursos];
  } else {
    articulosCarrito = [...articulosCarrito, infoCurso];
  }
  carritoHTML();
}

// muestra el carrito de compras en el html

function carritoHTML() {
  // limpiar el html
  limpiarHTML();

  articulosCarrito.forEach((curso) => {
    const { imagen, titulo, precio, cantidad, id } = curso;

    const row = document.createElement("tr");
    row.innerHTML = `
    <td><img src="${imagen}" width='150'></td>
    <td>${titulo}</td>
    <td>${precio}</td>
    <td>${cantidad}</td>
    <td><a href="#" class="borrar-curso" data-id="${id}">X</a></td>`;

    contenedorCarrito.appendChild(row);
  });
}

// elimina los cursos del table body

function limpiarHTML() {
  // forma lenta
  // contenedorCarrito.innerHTML = "";
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}

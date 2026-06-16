import { useState } from "react";
import "./Exportar.css";

function Exportar() {
  const [producto, setProducto] = useState({
    nombre: "",
    precio: "",
    imagen: "",
    descripcion: ""
  });

  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí irá tu fetch a Node/MongoDB
    console.log(producto);
  };

  return (
    <div className="contenedor-subir">
      <h2>Publicar Producto</h2>

      <form onSubmit={handleSubmit} className="form-producto">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del producto"
          onChange={handleChange}
        />

        <input
          type="number"
          name="precio"
          placeholder="Precio"
          onChange={handleChange}
        />

        <input
          type="text"
          name="imagen"
          placeholder="URL de la imagen"
          onChange={handleChange}
        />

        <textarea
          name="descripcion"
          placeholder="Descripción"
          rows="4"
          onChange={handleChange}
        ></textarea>

        <button type="submit">
          Publicar Producto
        </button>
      </form>
    </div>
  );
}

export default Exportar;
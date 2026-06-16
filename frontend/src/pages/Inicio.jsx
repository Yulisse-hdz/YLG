import { useNavigate } from "react-router-dom";
import "./Inicio.css";

function Inicio() {
  const navigate = useNavigate();
  const productos = [
    {
      id: 1,
      nombre: "Playera Oversize",
      precio: 299,
      imagen: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
    },
    {
      id: 2,
      nombre: "Sudadera Negra",
      precio: 599,
      imagen: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500"
    },
    {
      id: 3,
      nombre: "Jeans Clásicos",
      precio: 799,
      imagen: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500"
    },
    {
      id: 4,
      nombre: "Chaqueta Casual",
      precio: 899,
      imagen: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500"
    },
    {
      id: 5,
      nombre: "Vestido Moderno",
      precio: 699,
      imagen: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500"
    },
    {
      id: 6,
      nombre: "Tenis Urbanos",
      precio: 1299,
      imagen: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
    }
  ];

  return (
    <div className="inicio">
      <header className="navbar">
        <h1>YLG</h1>

        <div>
          <button
            className="nav-btn"
             onClick={() => navigate("/login")}>
            Iniciar Sesión
          </button>
        </div>
      </header>

      <section className="hero">
        <h2>Nueva Colección</h2>
        <p>Moda para todos los estilos</p>
        <button
           className="hero-btn"
          onClick={() => navigate("/exportar")}>
            Exportar Productos
        </button>
      </section>

      <section className="productos">
        <h2>Productos Destacados</h2>

        <div className="grid-productos">
          {productos.map((producto) => (
            <div className="card" key={producto.id}>
              <img
                src={producto.imagen}
                alt={producto.nombre}
              />

              <div className="card-info">
                <h3>{producto.nombre}</h3>
                <p>${producto.precio}</p>

                <button>
                  Ver Producto
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Inicio;
import { useState, useEffect } from "react";
import librosData from "../data/libros.json";
import LibroCard from "../components/LibroCard";

function Libros() {
  const [libros, setLibros] = useState([]);
  useEffect(() => {
    setLibros(librosData);
  }, []);
  return (
    <>
      <section className="container">
        <h2 className="text-center mb-4">Libros destacados</h2>
        <h3 className="text-center mb-4">{`Cantidad = ${libros.length}`}</h3>
        <div className="row">
          {libros.map((libro, i) => (
            <LibroCard key={i} libro={libro} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Libros;

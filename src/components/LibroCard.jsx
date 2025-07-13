function LibroCard({ libro }) {
  return (
    <>
      <div className="col-md-4 col-sm-6 col-12 mb-4">
        <div className="card h-100 bg-dark">
          <img
            src={`./src/assets/${libro.imagen}`}
            className="card-img-top"
            alt={`imagen de ${libro.titulo}`}
            style={{
              height: "300px",
              objectFit: "cover",
            }}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title text-warning">{libro.titulo}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item bg-dark text-light">
              <b>Autor:</b> {libro.autor}
            </li>
            <li className="list-group-item bg-dark text-light">
              {/* Mostrar elementos de array */}
              {/* <b>Género(s):</b> {libro.generos.join(", ")} */}

              <b>Generos:</b>
              <div className="mb-3">
                {libro.generos.map(
                  (
                    genero,
                    index // ← Usando prop libro.generos
                  ) => (
                    <span key={index} className="badge bg-secondary me-1 mb-1">
                      {genero}
                    </span>
                  )
                )}
              </div>
            </li>
          </ul>
          <div className="card-body">
            <a
              href={libro.wiki}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-100"
            >
              Detalles
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default LibroCard;

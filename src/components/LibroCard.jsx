
function LibroCard({ libro }) {
    return (
        <>
        <div class="mx-auto" style={{width :"300px"}}>
            <div class="card p-2  bg-dark" style={{ }}>
                <img src={`./src/assets/${libro.imagen}`} class="card-img-top" alt={`imagen de ${libro.titulo} `}/>
                <div class="card-body">
                    <h5 class="card-title text-warning">{libro.titulo}</h5>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p> */}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><b>Autor</b> {libro.autor}</li>
                    <li class="list-group-item"><b>Genero</b> {libro.genero}</li>
                </ul>
                <a href={libro.wiki}  target="_blank" class="btn btn-primary">Detalles</a>
            </div>
        </div>
        </>
    )

}

export default LibroCard
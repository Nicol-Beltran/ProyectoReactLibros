
function Navbar() {
    return (
        <>
     <nav className="navbar navbar-dark bg-primary shadow-sm">
    <div className="container-fluid">
        <a className="navbar-brand mb-0 h1 d-flex align-items-center" href="https://github.com/JSand89/react-libros" target="_blank">
            <img 
                src={`./src/assets/logo.jpg`} 
                alt="Logo" 
                width="45" 
                height="45" 
                className="d-inline-block me-2 rounded-circle border border-white border-2" 
            />
            <div>
                <span className="fw-bold">Gestión de Libros</span>
                <small className="d-block text-light opacity-75">Biblioteca digital</small>
            </div>
        </a>
    
        <form className="d-flex" role="search">
            <div className="input-group">
                <input 
                    className="form-control" 
                    type="search" 
                    placeholder="Buscar libros, autores..." 
                    aria-label="Search" 
                />
                <button className="btn btn-warning" type="submit">
                    Buscar
                </button>
            </div>
        </form>
    </div>
</nav>
        </>
    )
}

export default Navbar
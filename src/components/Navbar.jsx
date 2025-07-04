
function Navbar() {
    return (
        <>
            <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand mb-0 h1" href="#">
                        <img src={`./src/assets/logo.svg`} alt="Logo" width="40" height="34" className="d-inline-block align-text-top" />
                        Gestion de libros
                    </a>
                
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
</div>
            </nav>
        </>
    )
}

export default Navbar
import logo from './logo.svg';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container">
            <a class="navbar-brand" href="#">
                <img src={logo} alt="Bootstrap" width="48" height="48"></img> Hiper Compu Mega RED
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Nosotros</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Productos
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item" href="#">Componentes</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Gabinetes</a>
                            </li>
                            <li><hr class="dropdown-divider" ></hr></li>
                            <li>
                                <a class="dropdown-item" href="#">Ofertas</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div class="d-flex">
                    <CartWidget />
                </div>
            </div>
            </div>
        </nav>
    );
}

export default NavBar;
function CartWidget() {
    return(
        <button  class="btn btn-outline-success position-relative">
            <i class="bi bi-cart"></i>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                10
            </span>
        </button>
    );
}

export default CartWidget;
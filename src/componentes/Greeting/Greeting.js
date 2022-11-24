import ItemListContainer from '../ItemListContainer/ItemListContainer'

function Greeting(props) {
  const productos = props.productos;
  if(productos.length === 0){
    return (
      <div class="alert alert-warning" role="alert">
        <i class="bi bi-exclamation-diamond-fill"></i> No hay productos
      </div>
    );
  } else {
    return <ItemListContainer productos={productos}/>
  }
}

export default Greeting;

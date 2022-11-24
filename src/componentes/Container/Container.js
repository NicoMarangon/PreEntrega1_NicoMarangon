import Greeting from '../Greeting/Greeting'

function Container(props) {
    return (
        <section class="container mt-3">
            <Greeting productos={props.productos}/>
        </section>
    );
}

export default Container;
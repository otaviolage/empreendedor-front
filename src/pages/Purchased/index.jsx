import "./style.css";
import Header from '../../components/Header';
import { Link } from 'react-router-dom';


const Purchased = () => {
    const reload = () => {
        window.location.reload()
    }
    return (
        <div className="purchased">
            <Header />
            <div className="body-purchased">
                <h1>COMPRA EFETUADA COM SUCESSO!</h1>
            </div>
            <button onClick={()=>{reload()}} className="return">
                <Link to="./" className="remove"> Retornar ao Início </Link >
            </button>
            {localStorage.clear()}
        </div>
    )
}

export default Purchased;
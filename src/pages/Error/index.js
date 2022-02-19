import { Link } from 'react-router-dom';
import './error.css';

export default function Error(){
    return(
    <div className="errorContainer">
        <img src="notfound.png" alt="Pagina não encontrada" />
        <h1>Pagina não encontrada</h1>
        <Link to='/'>
            Voltar para o home!
        </Link>
    </div>   
    )
}
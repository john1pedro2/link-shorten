import { Link } from 'react-router-dom';
import {BsYoutube, BsInstagram} from 'react-icons/bs';
import './menu.css';

export default function Menu(){
    return(
        <div className="menu">
            <a className="socialButton" href="https://youtube.com/">
                <BsYoutube size={24} color='#FFF'/>
            </a>
            <a className="socialButton" href="https://instagram.com/">
                <BsInstagram size={24} color='#FFF'/>
            </a>
            <Link className="menuButton" to="/links">
                Meus Links
            </Link>
        </div>
    )
}

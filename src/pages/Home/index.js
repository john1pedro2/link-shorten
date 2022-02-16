import { FiLink } from 'react-icons/fi';
import './home.css';


export default function Home(){
    return (
      <div className="homeContainer">

        <div className="logoContainer">
          <img src="./logo.png" alt="Logo Url Shorten" />
          <h1>Programa Encurtador Url</h1>
          <span>Cole seu link para encurtar!</span>
        </div>

        <div className="inputContainer">
          <div>
          <FiLink size={24} color="#FFF"/>
          <input  
            placeholder='Cole seu link aqui...'
            />
          </div>
          <button>Gerar Link</button>
        </div>

      </div>
    )
  }
  
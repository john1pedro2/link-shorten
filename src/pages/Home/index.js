import { useState } from 'react';
import { FiLink } from 'react-icons/fi';
import './home.css';
import Modal from '../../Components/Modal';
import Menu from '../../Components/Menu';
import api from '../../services/api';
import { saveLink } from '../../services/linkStorage'

export default function Home(){
    const [link, setLink] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState('');

    async function shortLink(){

      try{
        const response = await api.post('/shorten', {
          long_url: link
        })

        setData(response.data);
        setShowModal(true);

        saveLink('@encurtaLink', response.data);

      }catch{
        alert('Ops parece que algo deu errado')
        setLink('');
      }
    }

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
            value={link}
            onChange={ (e) => setLink(e.target.value)}
            />
          </div>
          <button onClick={shortLink} >Gerar Link</button>
        </div>

        <Menu/>

        { showModal && (
          <Modal
            closeModal={() => setShowModal(false)}
            content={data}
          />
        ) }

      </div>

    )
  }
  
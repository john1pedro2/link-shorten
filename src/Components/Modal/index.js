import {FiX, FiClipboard} from 'react-icons/fi'
import './modal.css'


export default function Modal({ closeModal, content }){ 

    async function copyLink(){
        await navigator.clipboard.writeText(content.link)
        alert('Url copiada com sucesso"')
    }

    return(
        <div className="modalContainer">
            <div className="modalHeader">
                <h2>Link Encurtado</h2>
                <button onClick={closeModal}>
                    <FiX size={28} color='#000'/>                
                </button>
            </div>
            <span>
                {content.long_url}
            </span>

            <button className="modalLink" onClick={copyLink}>
                {content.link}
                <FiClipboard size={20} color='#FFF'/>
            </button>
        </div>
    )
}
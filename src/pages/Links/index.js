import { useState, useEffect } from 'react';

import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'
import './links.css';
import { Link } from 'react-router-dom';

export default function Links(){
    return (
      <div className="linksContainer">

          <div className="linksHeader">
          <Link to='/'>
            <FiArrowLeft size={38} color='#FFF'/>
          </Link>
            <h1>Meus Links</h1>
          </div>

          <div className="linksItem">
            <button className="links">
              <FiLink size={18} color='#FFF'/>
              https://linkexemplo.com.br
            </button>
            <button className='linkDelete'>
              <FiTrash size={24} color='#FF5454'/> 
            </button>
          </div>

          <div className="linksItem">
            <button className="links">
              <FiLink size={18} color='#FFF'/>
              https://linkexemplo.com.br
            </button>
            <button className='linkDelete'>
              <FiTrash size={24} color='#FF5454'/> 
            </button>
          </div>

      </div>
    )
  }
  
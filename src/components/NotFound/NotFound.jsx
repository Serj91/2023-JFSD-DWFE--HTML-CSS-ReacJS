import React from 'react';
import "./NotFound.css"
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="notfound">
      <h1>Página no encontrada</h1>
      
      <p>Lo sentimos, la página que buscas no existe.</p>

      <Link to="/" className="go-home">
        Volver al inicio
      </Link>
    </div>
  );
}


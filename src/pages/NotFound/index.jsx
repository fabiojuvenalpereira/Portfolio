import React from 'react';

import './style.css';

export default function NotFound() {
  return (
    <main className="main-not-found">
      <div className="container-message">
        <div className="message">
          404
        </div>
        <div className="links">
          <div className="text">Não clique aqui</div>
        </div>
      </div>
    </main>
  );
}

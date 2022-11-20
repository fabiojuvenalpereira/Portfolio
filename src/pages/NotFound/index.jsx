import React from 'react';
import Main from './styles';

export default function NotFound() {
  return (
    <Main className="main-not-found">
      <div className="container-message">
        <div className="message">
          404
        </div>
        <div className="links">
          <div className="text">Não clique aqui</div>
        </div>
      </div>
    </Main>
  );
}

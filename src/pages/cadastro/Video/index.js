import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../componentes/PagesDefault';

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <Link to="/cadastro/categoria">
        Cadastrar Video
      </Link>
    </PageDefault>
  )
}

export default CadastroVideo; 
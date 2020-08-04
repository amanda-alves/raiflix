import React from 'react';
import Menu from './componentes/Menu'
import dadosIniciais from './componentes/dados_iniciais.json';
import BannerMain from './componentes/BannerMain';
import Carousel from './componentes/Carousel';
import Footer from './componentes/Footer';


function App() {

  return (
    <div style={{ background: "#141414" }}>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"É necessário incluir mais mulheres na tecnologia. Mas você já pensou sobre como fazer isso acontecer?"}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carousel
        category={dadosIniciais.categorias[1]}
      />
      <Carousel
        category={dadosIniciais.categorias[2]}
      />      
      <Carousel
        category={dadosIniciais.categorias[3]}
      />      
      <Carousel
        category={dadosIniciais.categorias[4]}
      />      
      <Carousel
        category={dadosIniciais.categorias[5]}
      />      
      <Footer />
    </div>
  );
}

export default App;


import lavanda from './imagens/lavanda.png';
import geranio from './imagens/gerânio.png';
import alecrim from './imagens/alecrim.png';
import hortela from './imagens/hottelã.png';
import melaleucagrande from './imagens/melaleuca.png';
import laranja from './imagens/laranja.png';
import eucalipto from './imagens/eucalipto.png';
import bergamota from './imagens/bergamota.png';
import Palmarosa from './imagens/palmorosa.png';
import manjericao from './imagens/manjericão.png';
import limao from './imagens/limão.png';
import Grapefruit from './imagens/gripefrut.png';
import olibano from './imagens/olíbano.png';
import cravo from './imagens/cravo.png';
import salvia from './imagens/sálvia.png';


import Header from './Components/Header';
import MainTop from './Components/MainTop';
import './App.css';
import MainMiddle from './Components/MainMiddle';
import Lemon from './Components/Lemon';
import MainBottom from './Components/MainBottom';
import Footer from './Components/Footer';


function App() {
  return (
    <main className="App">
     <Header />
     <MainTop />
    
    <section className='rows'>
      <MainMiddle imagem={lavanda} tipo="Lavanda" quantidade="10ml" preco1="R$60,00" preco2="R$20,00" />

      <MainMiddle imagem={geranio} tipo="Gerânio" quantidade="5ml" preco1="R$44,00" preco2="R$14,66" />
        <MainMiddle imagem={alecrim} tipo="Alecrim (qt. Cineol)" quantidade="10ml" preco1="R$37,00" preco2="R$12,33" />
        <MainMiddle imagem={hortela} tipo="Hortelã-Pimenta (Menta)" quantidade="10ml" preco1="R$52,00" preco2="R$17,33" />
      </section>

      <section className='rows'>
        <MainMiddle imagem={melaleucagrande} tipo="Melaleuca (Tea Tree)" quantidade="10ml" preco1="R$50,00" preco2="R$16,66" />
        <MainMiddle imagem={laranja} tipo="Laranja (Orgânico)" quantidade="10ml" preco1="R$26,00" preco2="R$8,66" />
        <MainMiddle imagem={eucalipto} tipo="Eucalipto Globulus" quantidade="10ml" preco1="R$35,20" preco2="R$11,73" />
        <MainMiddle imagem={bergamota} tipo="Bergamota" quantidade="5ml" preco1="R$40,00" preco2="R$13,33" />
      </section>

      <section className='rows'>
        <MainMiddle imagem={manjericao} tipo=" Manjericão (qt. Methil Chavicol)" quantidade="10ml" preco1="R$38,00" preco2="R$12,99" />
        <MainMiddle imagem={Palmarosa} tipo="Palmarosa" quantidade="5ml" preco1="R$36,00" preco2="R$12,00" />
        <Lemon imagem={limao} tipo="Limão-Tahiti" quantidade="10ml" preco1="R$34,20" preco2="R$11,40" />
        <MainMiddle imagem={Grapefruit} tipo="Grapefruit" quantidade="10ml" preco1="R$56,00" preco2="R$18,66" />
      </section>

      <section className='rows'>
        <MainMiddle imagem={olibano} tipo="Olíbano" quantidade="5ml" preco1="R$84,00" preco2="R$28,00" />
        <MainMiddle imagem={cravo} tipo="Cravo" quantidade="10ml" preco1="R$38,00" preco2="R$12,66" />
        <MainMiddle imagem={salvia} tipo="Sálvia Esclareia" quantidade="5ml" preco1="R$51,20" preco2="R$17,06" />
        <MainMiddle imagem={hortela} tipo="Hortelã-Pimenta (Menta)" quantidade="10ml" preco1="R$52,00" preco2="R$17,33" />
      </section>

      <MainBottom />
      <Footer />
    
    </main>

  );
}

export default App;

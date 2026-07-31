import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Sobre from '../../components/Sobre/Sobre';
import Servicos from '../../components/Servicos/Servicos';
import Atuacao from '../../components/Atuacao/Atuacao';
import Parceiros from '../../components/Parceiros/Parceiros';
import Contato from '../../components/Contato/Contato';

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Sobre />
      <Servicos />
      <Atuacao />
      <Parceiros />
      <Contato />
    </div>
  );
}

export default Home;

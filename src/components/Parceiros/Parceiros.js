import claraluxImage from '../../assets/Imagens/claralux.jpg';
import styles from './Parceiros.module.css';

const parceiros = [
  { nome: 'Clara Lux', categoria: 'Iluminação', imagem: claraluxImage },
];

function HandshakeIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" width="28" height="28">
      <path d="M14 18l6-6a6 6 0 0 1 8.5 0L34 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 20l8 8a4 4 0 0 0 5.7 0l2.3-2.3a4 4 0 0 1 5.7 0L38 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 18l6 6m26-6l-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M19 31l2 2a4 4 0 0 0 5.7 0l1.3-1.3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Parceiros() {
  return (
    <section className={styles.parceiros} id="parceiros">
      <div className={styles.parceiros__container}>
        <div className={`${styles.parceiros__intro} reveal reveal--left`}>
          <span className={styles.parceiros__label}>Rede de confiança</span>
          <h2 className={styles.parceiros__title}>
            Marcas que fortalecem cada <span>entrega da WTE Elétrica</span>
          </h2>
          <p className={styles.parceiros__text}>
            A Clara Lux já faz parte dessa rede. Se a sua empresa busca atuar com projetos elétricos, iluminação e execução com padrão profissional, este é o espaço certo para construir uma parceria comercial com a WTE Elétrica.
          </p>
          <div className={styles.parceiros__cta_box}>
            <strong>Quer ser um parceiro da WTE?</strong>
            <p>
              Abrimos espaço para fornecedores, lojas, construtoras e marcas que queiram gerar negócios em conjunto, com atendimento técnico e relacionamento de longo prazo.
            </p>
            <a className={styles.parceiros__cta_link} href="#contato">
              Falar sobre parceria
            </a>
          </div>
        </div>

        <div className={`${styles.parceiros__panel} reveal reveal--right`}>
          <div className={styles.parceiros__panel_head}>
            <div className={styles.parceiros__icon_wrap}>
              <HandshakeIcon />
            </div>
            <div>
              <strong>Parceiro em destaque</strong>
              <span>Conheça uma marca que já soma valor aos nossos projetos</span>
            </div>
          </div>

          <div className={styles.parceiros__grid}>
            {parceiros.map((parceiro, index) => (
              <article
                key={parceiro.nome}
                className={`${styles.parceiros__card} ${parceiro.imagem ? styles.parceiros__card_with_image : ''} reveal reveal--up reveal--delay-${(index % 6) + 1}`}
              >
                {parceiro.imagem && (
                  <div className={styles.parceiros__image_wrap}>
                    <img
                      src={parceiro.imagem}
                      alt={parceiro.nome}
                      className={styles.parceiros__image}
                    />
                  </div>
                )}
                <span className={styles.parceiros__category}>{parceiro.categoria}</span>
                <h3 className={styles.parceiros__name}>{parceiro.nome}</h3>
                <p className={styles.parceiros__description}>
                  Referência em iluminação, contribuindo com soluções que elevam o acabamento e a percepção de valor de cada entrega.
                </p>
              </article>
            ))}
          </div>

          <div className={styles.parceiros__footer_callout}>
            <strong>Sua empresa pode aparecer aqui.</strong>
            <p>
              Buscamos parceiros com visão de qualidade, agilidade comercial e compromisso com uma boa experiência para o cliente final.
            </p>
            {/* <a className={styles.parceiros__footer_link} href="#contato">
              Solicitar contato comercial
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Parceiros;
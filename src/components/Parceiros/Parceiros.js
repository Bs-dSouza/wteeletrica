import styles from './Parceiros.module.css';

const parceiros = [
  { nome: 'Construtora Horizonte', categoria: 'Construtora' },
  { nome: 'Prime Engenharia', categoria: 'Execução e obras' },
  { nome: 'Casa da Iluminação', categoria: 'Materiais elétricos' },
  { nome: 'Centro do Eletricista', categoria: 'Distribuidor parceiro' },
  { nome: 'Acabamento Urbano', categoria: 'Loja parceira' },
  { nome: 'Grupo Vertical', categoria: 'Condomínios e síndicos' },
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
            Parceiros que fortalecem cada <span>entrega da WTE Elétrica</span>
          </h2>
          <p className={styles.parceiros__text}>
            Espaço ideal para destacar construtoras, lojas de materiais e fornecedores que caminham junto com a sua operação.
          </p>
        </div>

        <div className={`${styles.parceiros__panel} reveal reveal--right`}>
          <div className={styles.parceiros__panel_head}>
            <div className={styles.parceiros__icon_wrap}>
              <HandshakeIcon />
            </div>
            <div>
              <strong>Empresas parceiras</strong>
              <span>Selecione os nomes reais quando quiser atualizar</span>
            </div>
          </div>

          <div className={styles.parceiros__grid}>
            {parceiros.map((parceiro, index) => (
              <article
                key={parceiro.nome}
                className={`${styles.parceiros__card} reveal reveal--up reveal--delay-${(index % 6) + 1}`}
              >
                <span className={styles.parceiros__category}>{parceiro.categoria}</span>
                <h3 className={styles.parceiros__name}>{parceiro.nome}</h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Parceiros;
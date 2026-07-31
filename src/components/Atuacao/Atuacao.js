import styles from './Atuacao.module.css';

function PinIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" width="28" height="28">
      <path
        d="M24 42s12-10.3 12-22a12 12 0 1 0-24 0c0 11.7 12 22 12 22z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="20" r="4.5" fill="currentColor" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" width="28" height="28">
      <rect x="10" y="8" width="28" height="30" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <path d="M18 16h4M26 16h4M18 23h4M26 23h4M18 30h4M26 30h4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M22 38v-6h4v6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function CityIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" width="28" height="28">
      <path d="M8 38h32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M12 38V18l10-5v25M22 38V10l14 6v22" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M17 22h.01M17 27h.01M27 19h.01M32 24h.01M32 29h.01" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

const frentes = [
  {
    icon: <BuildingIcon />,
    title: 'Condomínios residenciais e comerciais',
    text: 'Atendemos instalações, manutenção preventiva, retrofit e melhorias em áreas comuns, halls, garagens e unidades.',
  },
  {
    icon: <CityIcon />,
    title: 'Casas, apartamentos, lojas e empresas',
    text: 'Executamos projetos sob medida para obras novas, reformas e adequações elétricas com acabamento técnico e visual.',
  },
  {
    icon: <PinIcon />,
    title: 'Atuação regional com logística rápida',
    text: 'Organizamos atendimento eficiente por bairros, cidades e regiões próximas para reduzir prazo de resposta e execução.',
  },
];

const regioes = ['São Paulo e Grande São Paulo', 'ABC Paulista', 'Osasco e Barueri', 'Guarulhos', 'Alphaville e Tamboré', 'Interior sob consulta'];

function Atuacao() {
  return (
    <section className={styles.atuacao} id="atuacao">
      <div className={styles.atuacao__container}>
        <div className={styles.atuacao__hero}>
          <div className={`${styles.atuacao__copy} reveal reveal--left`}>
            <span className={styles.atuacao__label}>Onde atendemos</span>
            <h2 className={styles.atuacao__title}>
              Presença forte em <span>regiões, cidades e condomínios</span>
            </h2>
            <p className={styles.atuacao__text}>
              Estruturamos nossos atendimentos para oferecer agilidade, organização e padrão técnico consistente em diferentes perfis de clientes e localizações.
            </p>

            <div className={styles.atuacao__badges}>
              {['Residencial', 'Condomínios', 'Comercial', 'Obras e retrofit'].map((item, index) => (
                <span
                  key={item}
                  className={`${styles.atuacao__badge} reveal reveal--up reveal--delay-${(index % 4) + 1}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className={`${styles.atuacao__spotlight} reveal reveal--right`}>
            <div className={styles.atuacao__map_card}>
              <div className={styles.atuacao__map_glow} aria-hidden="true" />
              <div className={styles.atuacao__map_head}>
                <span className={styles.atuacao__map_tag}>Cobertura</span>
                <strong>Atendimento planejado por região</strong>
              </div>
              <div className={styles.atuacao__map_grid}>
                {regioes.map((regiao, index) => (
                  <div
                    key={regiao}
                    className={`${styles.atuacao__map_item} reveal reveal--scale reveal--delay-${(index % 6) + 1}`}
                  >
                    <PinIcon />
                    <span>{regiao}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.atuacao__cards}>
          {frentes.map((item, index) => (
            <article
              key={item.title}
              className={`${styles.atuacao__card} reveal reveal--up reveal--delay-${index + 1}`}
            >
              <div className={styles.atuacao__card_icon}>{item.icon}</div>
              <h3 className={styles.atuacao__card_title}>{item.title}</h3>
              <p className={styles.atuacao__card_text}>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Atuacao;
import styles from './Servicos.module.css';

/* ── Ícones SVG por serviço ─────────────────────── */
function IconInstalacao() {
  return (
    <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2.5" />
      <path d="M24 14v10l6 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 34l4-4M34 34l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconProjeto() {
  return (
    <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
      <rect x="8" y="6" width="32" height="36" rx="4" stroke="currentColor" strokeWidth="2.5" />
      <path d="M14 16h20M14 22h20M14 28h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="36" cy="36" r="6" fill="currentColor" />
      <path d="M33 36h6M36 33v6" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconLustre() {
  return (
    <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
      <path d="M24 6v4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 10c-6 0-10 4-10 9s4 9 10 9 10-4 10-9-4-9-10-9z" stroke="currentColor" strokeWidth="2.5" />
      <path d="M18 28l-2 8h16l-2-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 36h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 14l-4-2M36 14l4-2M10 22H6M42 22h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconLed() {
  return (
    <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
      <rect x="6" y="18" width="36" height="12" rx="6" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="16" cy="24" r="3" fill="currentColor" />
      <circle cx="24" cy="24" r="3" fill="currentColor" />
      <circle cx="32" cy="24" r="3" fill="currentColor" />
      <path d="M12 18v-4M24 18v-6M36 18v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 30v4M24 30v6M36 30v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconManutencao() {
  return (
    <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
      <path d="M38 10l-4 4-4-4 4-4 4 4z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M34 14L18 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="13" cy="35" r="5" stroke="currentColor" strokeWidth="2.5" />
      <path d="M24 10c-6.6 0-12 5.4-12 12 0 2 .5 3.9 1.4 5.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M34.6 20.5C35.5 22.1 36 24 36 26c0 6.6-5.4 12-12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function IconAutomacao() {
  return (
    <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
      <rect x="10" y="10" width="28" height="28" rx="6" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2.5" />
      <path d="M24 10v4M24 34v4M10 24h4M34 24h4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M14.9 14.9l2.8 2.8M30.3 30.3l2.8 2.8M14.9 33.1l2.8-2.8M30.3 17.7l2.8-2.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Dados dos serviços ─────────────────────────── */
const servicos = [
  {
    id: 1,
    icon: <IconInstalacao />,
    titulo: 'Instalações Elétricas',
    descricao: 'Fazemos qualquer tipo de instalação elétrica residencial e comercial com segurança e qualidade garantida.',
    foto: null,
    destaque: false,
  },
  {
    id: 2,
    icon: <IconProjeto />,
    titulo: 'Projetos do Zero',
    descricao: 'Criamos projetos personalizados que atenderão a sua demanda, do planejamento à execução completa.',
    foto: null,
    destaque: true,
  },
  {
    id: 3,
    icon: <IconLustre />,
    titulo: 'Instalação de Lustres',
    descricao: 'Instalação de lustres e iluminarias com acabamento perfeito para valorizar seu ambiente.',
    foto: null,
    destaque: false,
  },
  {
    id: 4,
    icon: <IconLed />,
    titulo: 'Perfil de LED',
    descricao: 'Instalação de perfis de LED embutidos e sobrepostos para iluminação decorativa e funcional.',
    foto: null,
    destaque: false,
  },
  {
    id: 5,
    icon: <IconManutencao />,
    titulo: 'Manutenções Preventivas',
    descricao: 'Evite panes e acidentes com manutenções periódicas. Identificamos falhas antes que causem problemas.',
    foto: null,
    destaque: true,
  },
  {
    id: 6,
    icon: <IconAutomacao />,
    titulo: 'Automatização',
    descricao: 'Tornamos sua residência ou empresa mais inteligente com automação de iluminação e circuitos elétricos.',
    foto: null,
    destaque: false,
  },
];

/* ── Componente ─────────────────────────────────── */
function Servicos() {
  return (
    <section className={styles.servicos} id="servicos">

      {/* Cabeçalho da seção */}
      <div className={styles.servicos__header}>
        <div className={`${styles.servicos__header_inner} reveal reveal--left`}>
          <span className={styles.servicos__label}>O que fazemos</span>
          <h2 className={styles.servicos__title}>
            Soluções Elétricas Completas<br />
            <span>para Sua Obra ou Reforma.</span>
          </h2>
          <p className={styles.servicos__subtitle}>
            Aliamos experiência prática a tecnologias modernas para oferecer projetos que economizam energia
            e facilitam manutenções futuras. Oferecemos um leque completo de serviços para garantir que sua
            residência ou comércio nunca pare por falhas elétricas.
          </p>
        </div>
        <div className={`${styles.servicos__header_deco} reveal reveal--scale reveal--delay-2`}>
          <div className={styles.servicos__deco_ring}>
            <div className={styles.servicos__deco_inner}>
              <svg viewBox="0 0 80 80" fill="none" width="60" height="60">
                <path d="M40 10v8M40 62v8M10 40h8M62 40h8" stroke="#0a0a0a" strokeWidth="4" strokeLinecap="round" />
                <path d="M22 22l5.6 5.6M52.4 52.4l5.6 5.6M22 58l5.6-5.6M52.4 27.6l5.6-5.6" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="round" />
                <circle cx="40" cy="40" r="14" fill="#0a0a0a" />
                <circle cx="40" cy="40" r="8" fill="#FFB800" />
                <path d="M37 40l2 2 4-4" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Grid de serviços */}
      <div className={styles.servicos__container}>
        <div className={styles.servicos__grid}>
          {servicos.map((s, i) => (
            <div
              key={s.id}
              className={`${styles.servicos__card} ${s.destaque ? styles['servicos__card--destaque'] : ''} reveal reveal--up reveal--delay-${(i % 3) + 1}`}
            >
              {/* Área da foto */}
              <div className={styles.servicos__card_img}>
                {s.foto ? (
                  <img src={s.foto} alt={s.titulo} />
                ) : (
                  <div className={styles.servicos__card_placeholder}>
                    <div className={styles.servicos__card_placeholder_icon}>
                      {s.icon}
                    </div>
                    <span>Adicionar foto</span>
                  </div>
                )}
                <div className={styles.servicos__card_overlay} />
              </div>

              {/* Conteúdo */}
              <div className={styles.servicos__card_body}>
                <div className={styles.servicos__card_icon_wrap}>
                  {s.icon}
                </div>
                <h3 className={styles.servicos__card_title}>{s.titulo}</h3>
                <p className={styles.servicos__card_desc}>{s.descricao}</p>
                <a href="#atendimento" className={styles.servicos__card_link}>
                  Solicitar serviço <IconArrow />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Servicos;

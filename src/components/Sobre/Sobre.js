import styles from './Sobre.module.css';
import eletricista from '../../assets/Imagens/eletricista.jpg';

function HelmetIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" width="48" height="48">
      <path d="M32 8C19.8 8 10 17.8 10 30v4h44v-4C54 17.8 44.2 8 32 8z" fill="currentColor" opacity="0.9" />
      <rect x="8" y="34" width="48" height="8" rx="4" fill="currentColor" />
      <rect x="28" y="42" width="8" height="6" rx="2" fill="currentColor" />
      <path d="M20 30c0-6.6 5.4-12 12-12s12 5.4 12 12" stroke="#0a0a0a" strokeWidth="2" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" width="48" height="48">
      <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="4" />
      <path d="M32 20v13l8 5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 14l-4-4M54 14l4-4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function CheckListIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" width="48" height="48">
      <rect x="10" y="6" width="44" height="52" rx="6" stroke="currentColor" strokeWidth="4" />
      <path d="M20 24l5 5 10-10" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 38h24M20 46h16" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

const cards = [
  {
    icon: <HelmetIcon />,
    title: 'ESPECIALISTA CERTIFICADOS',
    text: 'Nossa equipe possui certificações NR10 e NR35, garantindo rigorosa conformidade com todas as normas de segurança vigentes.',
  },
  {
    icon: <ClockIcon />,
    title: 'RIGOR E PONTUALIDADE',
    text: 'Respeitamos o seu tempo e o seu imóvel. Trabalhamos com cronogramas sérios, desde pequenos reparos até grandes projetos do zero.',
  },
  {
    icon: <CheckListIcon />,
    title: 'SOLUÇÕES INTELIGENTES',
    text: 'Unimos experiência prática com tecnologias modernas para oferecer projetos que economizam manutenções futuras.',
  },
];

function Sobre() {
  return (
    <section className={styles.sobre} id="sobre">
      <div className={styles.sobre__container}>

        <div className={styles.sobre__top}>
          <div className={`${styles.sobre__text} reveal reveal--left`}>
            <span className={styles.sobre__label}>Conheça a</span>
            <h2 className={styles.sobre__title}>WTEELÉETRICA</h2>
            <p className={styles.sobre__description}>
              Na WT Elétrica, não entregamos apenas serviços; entregamos
              segurança e conformidade. Somos uma empresa especializada em
              instalações elétricas, comprometida com os mais altos padrões
              de qualidade do mercado.
            </p>
          </div>

          <div className={`${styles.sobre__image_wrapper} reveal reveal--right`}>
            <img
              src={eletricista}
              alt="Eletricista WTE Elétrica"
              className={styles.sobre__image}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              width="500"
              height="400"
            />
          </div>
        </div>

        <div className={styles.sobre__cards}>
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`${styles.sobre__card} reveal reveal--up reveal--delay-${i + 1}`}
            >
              <div className={styles.sobre__card_icon}>{card.icon}</div>
              <h3 className={styles.sobre__card_title}>{card.title}</h3>
              <p className={styles.sobre__card_text}>{card.text}</p>
            </div>
          ))}
        </div>

        <div className={`${styles.sobre__cta} reveal reveal--up reveal--delay-2`}>
          <p className={styles.sobre__cta_text}>
            Não Arrisque a Segurança do Seu Patrimônio.{' '}
            <span>Escolha a WTEEléetrica.</span>
          </p>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.sobre__cta_btn}
          >
            <WhatsAppIcon />
            Falar com Especialista no WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}

export default Sobre;

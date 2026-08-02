import React, { useEffect, useState } from "react";
import styles from "./Servicos.module.css";

/* ── Ícones SVG por serviço ─────────────────────── */
function IconInstalacao() {
  return (
    <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M24 14v10l6 4"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 34l4-4M34 34l-4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconProjeto() {
  return (
    <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
      <rect
        x="8"
        y="6"
        width="32"
        height="36"
        rx="4"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M14 16h20M14 22h20M14 28h12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="36" cy="36" r="6" fill="currentColor" />
      <path
        d="M33 36h6M36 33v6"
        stroke="#0a0a0a"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconLustre() {
  return (
    <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
      <path
        d="M24 6v4"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M24 10c-6 0-10 4-10 9s4 9 10 9 10-4 10-9-4-9-10-9z"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M18 28l-2 8h16l-2-8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 36h8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 14l-4-2M36 14l4-2M10 22H6M42 22h-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconLed() {
  return (
    <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
      <rect
        x="6"
        y="18"
        width="36"
        height="12"
        rx="6"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle cx="16" cy="24" r="3" fill="currentColor" />
      <circle cx="24" cy="24" r="3" fill="currentColor" />
      <circle cx="32" cy="24" r="3" fill="currentColor" />
      <path
        d="M12 18v-4M24 18v-6M36 18v-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 30v4M24 30v6M36 30v4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconManutencao() {
  return (
    <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
      <path
        d="M38 10l-4 4-4-4 4-4 4 4z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M34 14L18 30"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="13" cy="35" r="5" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M24 10c-6.6 0-12 5.4-12 12 0 2 .5 3.9 1.4 5.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M34.6 20.5C35.5 22.1 36 24 36 26c0 6.6-5.4 12-12 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconAutomacao() {
  return (
    <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
      <rect
        x="10"
        y="10"
        width="28"
        height="28"
        rx="6"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M24 10v4M24 34v4M10 24h4M34 24h4"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M14.9 14.9l2.8 2.8M30.3 30.3l2.8 2.8M14.9 33.1l2.8-2.8M30.3 17.7l2.8-2.8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
      <path
        d="M4 10h12M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Dados dos serviços ─────────────────────────── */
const servicos = [
  {
    id: 1,
    icon: <IconLed />,
    titulo: "Perfil de LED",
    descricao:
      "Instalação de perfis de LED embutidos e sobrepostos para iluminação decorativa e funcional.",
    foto: require("../../assets/Imagens/LED/led1.jpeg"),
    destaque: false,
    fotos: [
      require("../../assets/Imagens/LED/led1.jpeg"),
      require("../../assets/Imagens/LED/led2.jpeg"),
      require("../../assets/Imagens/LED/led3.jpeg"),
      require("../../assets/Imagens/LED/led4.jpeg"),
      require("../../assets/Imagens/LED/led5.jpeg"),
      require("../../assets/Imagens/LED/led6.jpeg"),
      require("../../assets/Imagens/LED/led7.jpeg"),
      require("../../assets/Imagens/LED/led8.jpeg"),
      require("../../assets/Imagens/LED/led9.jpeg"),
      require("../../assets/Imagens/LED/led10.jpeg"),
      require("../../assets/Imagens/LED/led11.jpeg"),
      require("../../assets/Imagens/LED/led12.jpeg"),
      require("../../assets/Imagens/LED/led13.jpeg"),
      require("../../assets/Imagens/LED/led14.jpeg"),
    ],
  },
  {
    id: 2,
    icon: <IconProjeto />,
    titulo: "Projetos do Zero",
    descricao:
      "Criamos projetos personalizados que atenderão a sua demanda, do planejamento à execução completa.",
    foto:  require("../../assets/Imagens/Projetos/projeto1.jpeg"),
    destaque: false,
    fotos: [
      require("../../assets/Imagens/Projetos/projeto1.jpeg"),
      require("../../assets/Imagens/Projetos/projeto2.jpeg"),
      require("../../assets/Imagens/Projetos/projeto3.jpeg"),
      require("../../assets/Imagens/Projetos/projeto4.jpeg"),
      require("../../assets/Imagens/Projetos/projeto5.jpeg")
    ],
  },
  {
    id: 3,
    icon: <IconLustre />,
    titulo: "Instalação de Lustres",
    descricao:
      "Instalação de lustres e iluminarias com acabamento perfeito para valorizar seu ambiente.",
    foto: require("../../assets/Imagens/Lustres/lustre6.jpeg"),
    destaque: false,
    fotos: [
      require("../../assets/Imagens/Lustres/lustre1.jpeg"),
      require("../../assets/Imagens/Lustres/lustre2.jpeg"),
      require("../../assets/Imagens/Lustres/lustre3.jpeg"),
      require("../../assets/Imagens/Lustres/lustre4.jpeg"),
      require("../../assets/Imagens/Lustres/lustre5.jpeg"),
      require("../../assets/Imagens/Lustres/lustre6.jpeg"),

    ],
  },
  {
    id: 4,
    icon: <IconInstalacao />,
    titulo: "Instalações Elétricas",
    descricao:
      "Fazemos qualquer tipo de instalação elétrica residencial e comercial com segurança e qualidade garantida.",
    foto: require("../../assets/Imagens/Instalacoes/1.jpeg"),
    destaque: false,
    fotos: [
      require("../../assets/Imagens/Instalacoes/1.jpeg"),
      require("../../assets/Imagens/Instalacoes/2.jpeg"),
      require("../../assets/Imagens/Instalacoes/3.jpeg"),
      require("../../assets/Imagens/Instalacoes/4.jpeg"),
      require("../../assets/Imagens/Instalacoes/5.jpeg"),
      require("../../assets/Imagens/Instalacoes/6.jpeg"),
    ],
  },
  {
    id: 5,
    icon: <IconManutencao />,
    titulo: "Quadros Elétricos e Manutenção",
    descricao:
      "Realizamos manutenção elétrica e instalação de quadros elétricos, garantindo segurança e eficiência para sua residência ou comércio.",
    foto: require("../../assets/Imagens/ManuQuadros/1.mp4"),
    destaque: true,
    fotos: [],
    videos: [
      require("../../assets/Imagens/ManuQuadros/1.mp4"),
      require("../../assets/Imagens/ManuQuadros/2.mp4"),
      require("../../assets/Imagens/ManuQuadros/3.mp4"),
      require("../../assets/Imagens/ManuQuadros/4.mp4"),
      require("../../assets/Imagens/ManuQuadros/5.mp4"),
    ],
    badge: "Quadros em ação",
  },
  {
    id: 6,
    icon: <IconAutomacao />,
    titulo: "Automatização",
    descricao:
      "Tornamos sua residência ou empresa mais inteligente com automação de iluminação e circuitos elétricos.",
    foto: require("../../assets/Imagens/Automacao/WhatsApp Video 2026-08-01 at 19.35.51.mp4"),
    destaque: true,
    fotos: [],
    videos: [
      require("../../assets/Imagens/Automacao/WhatsApp Video 2026-08-01 at 19.35.51.mp4"),
      require("../../assets/Imagens/Automacao/WhatsApp Video 2026-08-01 at 19.35.51 (1).mp4"),
      require("../../assets/Imagens/Automacao/WhatsApp Video 2026-08-01 at 19.35.51 (2).mp4"),
      require("../../assets/Imagens/Automacao/WhatsApp Video 2026-08-01 at 19.35.51 (3).mp4"),
      require("../../assets/Imagens/Automacao/WhatsApp Video 2026-08-01 at 19.35.51 (4).mp4"),
    ],
    badge: "Automação em ação",
  },
];

/* ── Componente ─────────────────────────────────── */
function Servicos() {
  const [abrirModal, setAbrirModal] = useState(false);
  const [servicoSelecionado, setServicoSelecionado] = useState(null);
  const [imagemSelecionadaIndex, setImagemSelecionadaIndex] = useState(null);

  const imagensDoServico = servicoSelecionado?.fotos || [];
  const imagemExpandida =
    imagemSelecionadaIndex !== null ? imagensDoServico[imagemSelecionadaIndex] : null;

  const abrirModalImagens = (servico) => {
    setServicoSelecionado(servico);
    setAbrirModal(true);
  };

  const abrirImagemTelaCheia = (index) => {
    setImagemSelecionadaIndex(index);
  };

  const fecharImagemTelaCheia = () => {
    setImagemSelecionadaIndex(null);
  };

  const mostrarImagemAnterior = () => {
    if (!imagensDoServico.length) {
      return;
    }

    setImagemSelecionadaIndex((indexAtual) => {
      if (indexAtual === null) {
        return 0;
      }

      return (indexAtual - 1 + imagensDoServico.length) % imagensDoServico.length;
    });
  };

  const mostrarProximaImagem = () => {
    if (!imagensDoServico.length) {
      return;
    }

    setImagemSelecionadaIndex((indexAtual) => {
      if (indexAtual === null) {
        return 0;
      }

      return (indexAtual + 1) % imagensDoServico.length;
    });
  };

  useEffect(() => {
    if (imagemSelecionadaIndex === null) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        fecharImagemTelaCheia();
      }

      if (event.key === "ArrowLeft") {
        setImagemSelecionadaIndex((indexAtual) => {
          if (indexAtual === null || !imagensDoServico.length) {
            return indexAtual;
          }

          return (indexAtual - 1 + imagensDoServico.length) % imagensDoServico.length;
        });
      }

      if (event.key === "ArrowRight") {
        setImagemSelecionadaIndex((indexAtual) => {
          if (indexAtual === null || !imagensDoServico.length) {
            return indexAtual;
          }

          return (indexAtual + 1) % imagensDoServico.length;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [imagemSelecionadaIndex, imagensDoServico.length]);

  const fecharModal = () => {
    fecharImagemTelaCheia();
    setServicoSelecionado(null);
    setAbrirModal(false);
  };

  return (
    <section className={styles.servicos} id="servicos">
      {/* Cabeçalho da seção */}
      <div className={styles.servicos__header}>
        <div className={`${styles.servicos__header_inner} reveal reveal--left`}>
          <span className={styles.servicos__label}>O que fazemos</span>
          <h2 className={styles.servicos__title}>
            Soluções Elétricas Completas
            <br />
            <span>para Sua Obra ou Reforma.</span>
          </h2>
          <p className={styles.servicos__subtitle}>
            Aliamos experiência prática a tecnologias modernas para oferecer
            projetos que economizam energia e facilitam manutenções futuras.
            Oferecemos um leque completo de serviços para garantir que sua
            residência ou comércio nunca pare por falhas elétricas.
          </p>
        </div>
        <div
          className={`${styles.servicos__header_deco} reveal reveal--scale reveal--delay-2`}
        >
          <div className={styles.servicos__deco_ring}>
            <div className={styles.servicos__deco_inner}>
              <svg viewBox="0 0 80 80" fill="none" width="60" height="60">
                <path
                  d="M40 10v8M40 62v8M10 40h8M62 40h8"
                  stroke="#0a0a0a"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M22 22l5.6 5.6M52.4 52.4l5.6 5.6M22 58l5.6-5.6M52.4 27.6l5.6-5.6"
                  stroke="#0a0a0a"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="40" cy="40" r="14" fill="#0a0a0a" />
                <circle cx="40" cy="40" r="8" fill="#FFB800" />
                <path
                  d="M37 40l2 2 4-4"
                  stroke="#0a0a0a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
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
              className={`${styles.servicos__card} ${s.destaque ? styles["servicos__card--destaque"] : ""} reveal reveal--up reveal--delay-${(i % 3) + 1}`}
              onClick={() => abrirModalImagens(s)}
            >
              {/* Área da foto */}
              <div className={styles.servicos__card_img}>
                {s.videos && s.videos.length > 0 ? (
                  <>
                    <video
                      className={styles.servicos__card_video}
                      src={s.videos[0]}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                    <div className={styles.servicos__card_badge}>{s.badge || "Veja o projeto"}</div>
                  </>
                ) : s.foto ? (
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
                <div className={styles.servicos__card_icon_wrap}>{s.icon}</div>
                <h3 className={styles.servicos__card_title}>{s.titulo}</h3>
                <p className={styles.servicos__card_desc}>{s.descricao}</p>
                <a href="#atendimento" className={styles.servicos__card_link}>
                  Solicitar serviço <IconArrow />
                </a>
              </div>
            </div>
          ))}
          {abrirModal && servicoSelecionado && (
            <div className={styles.modalOverlay} onClick={fecharModal}>
              <div
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
              >
                <button className={styles.fechar} onClick={fecharModal}>
                  ✕
                </button>

                <h2>{servicoSelecionado.titulo}</h2>

                <div className={styles.galeria}>
                  {(servicoSelecionado.videos && servicoSelecionado.videos.length > 0) ||
                  (servicoSelecionado.fotos && servicoSelecionado.fotos.length > 0) ? (
                    <>
                      {servicoSelecionado.videos && servicoSelecionado.videos.map((video, index) => (
                        <div key={`video-${index}`} className={styles.mediaCard}>
                          <video
                            className={styles.mediaCard__video}
                            src={video}
                            controls
                            muted
                            playsInline
                            preload="metadata"
                          />
                          <span className={styles.mediaCard__label}>{`Video ${index + 1}`}</span>
                        </div>
                      ))}
                      {servicoSelecionado.fotos && servicoSelecionado.fotos.map((foto, index) => (
                        <div key={`foto-${index}`} className={styles.mediaCard}>
                          <img
                            className={styles.mediaCard__image}
                            src={foto}
                            alt={`${servicoSelecionado.titulo} ${index + 1}`}
                            onClick={() => abrirImagemTelaCheia(index)}
                          />
                          <span className={styles.mediaCard__label}>{`Foto ${index + 1}`}</span>
                        </div>
                      ))}
                    </>
                  ) : (
                    <div className={styles.noImages}>
                      <p>Em breve, fotos de serviços realizados nesta categoria!</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          {imagemExpandida && (
            <div
              className={styles.lightboxOverlay}
              onClick={fecharImagemTelaCheia}
            >
              <button
                type="button"
                className={`${styles.lightboxNav} ${styles.lightboxNavPrev}`}
                onClick={(event) => {
                  event.stopPropagation();
                  mostrarImagemAnterior();
                }}
                aria-label="Imagem anterior"
              >
                ‹
              </button>

              <div
                className={styles.lightboxContent}
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  className={styles.lightboxClose}
                  onClick={fecharImagemTelaCheia}
                  aria-label="Fechar imagem"
                >
                  ✕
                </button>

                <img
                  className={styles.lightboxImage}
                  src={imagemExpandida}
                  alt={`${servicoSelecionado.titulo} ${imagemSelecionadaIndex + 1}`}
                />

                <div className={styles.lightboxFooter}>
                  <span className={styles.lightboxCounter}>
                    {imagemSelecionadaIndex + 1} / {imagensDoServico.length}
                  </span>
                  <span className={styles.lightboxHint}>
                    Use as setas do teclado para navegar
                  </span>
                </div>
              </div>

              <button
                type="button"
                className={`${styles.lightboxNav} ${styles.lightboxNavNext}`}
                onClick={(event) => {
                  event.stopPropagation();
                  mostrarProximaImagem();
                }}
                aria-label="Próxima imagem"
              >
                ›
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Servicos;

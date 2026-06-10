import { useState } from 'react';
import styles from './Contato.module.css';

/* ── Ícones ─────────────────────────────────────── */
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.87a8.18 8.18 0 0 0 4.78 1.52V7a4.85 4.85 0 0 1-1.01-.31z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  );
}

/* ── Componente ─────────────────────────────────── */
function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
  const [enviado, setEnviado] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { nome, email, mensagem } = form;
    const subject = encodeURIComponent(`Contato via site — ${nome}`);
    const body = encodeURIComponent(
      `Nome: ${nome}\nE-mail: ${email}\n\nMensagem:\n${mensagem}`
    );
    window.location.href = `mailto:contato@wteeletrica.com.br?subject=${subject}&body=${body}`;
    setEnviado(true);
    setTimeout(() => setEnviado(false), 4000);
  }

  return (
    <section id="contato" className={styles.contato}>
      {/* Cabeçalho amarelo — mesmo padrão dos Serviços */}
      <div className={styles.contato__header}>
        <div className={styles.contato__header_inner}>
          <span className={styles.contato__label}>FALE CONOSCO</span>
          <h2 className={styles.contato__title}>
            ENTRE EM <span>CONTATO</span>
          </h2>
          <p className={styles.contato__subtitle}>
            Solicite seu orçamento ou tire dúvidas. Respondemos rápido!
          </p>
        </div>
        <div className={styles.contato__header_deco} aria-hidden="true">
          <div className={styles.contato__deco_ring}>
            <EmailIcon />
          </div>
        </div>
      </div>

      {/* Corpo */}
      <div className={styles.contato__body}>
        <div className={styles.contato__container}>

          {/* Formulário de e-mail */}
          <div className={`${styles.contato__form_col} reveal reveal--left`}>
            <div className={styles.contato__form_card}>
              <h3 className={styles.contato__form_title}>
                <EmailIcon />
                Envie um e-mail
              </h3>
              <form onSubmit={handleSubmit} className={styles.contato__form} noValidate>
                <div className={styles.contato__field}>
                  <label htmlFor="nome" className={styles.contato__field_label}>Seu nome</label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    placeholder="Ex: João Silva"
                    className={styles.contato__input}
                    value={form.nome}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>
                <div className={styles.contato__field}>
                  <label htmlFor="email" className={styles.contato__field_label}>Seu e-mail</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Ex: joao@email.com"
                    className={styles.contato__input}
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>
                <div className={styles.contato__field}>
                  <label htmlFor="mensagem" className={styles.contato__field_label}>Mensagem</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={5}
                    placeholder="Descreva o serviço que precisa..."
                    className={`${styles.contato__input} ${styles.contato__textarea}`}
                    value={form.mensagem}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className={styles.contato__submit} disabled={enviado}>
                  {enviado ? (
                    'Abrindo cliente de e-mail...'
                  ) : (
                    <>
                      <SendIcon />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Coluna direita — WhatsApp + redes sociais */}
          <div className={`${styles.contato__right_col} reveal reveal--right`}>

            {/* Card WhatsApp */}
            <a
              href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contato__whatsapp_card}
            >
              <div className={styles.contato__whatsapp_icon}>
                <WhatsAppIcon />
              </div>
              <div className={styles.contato__whatsapp_text}>
                <strong>WhatsApp</strong>
                <span>Resposta em minutos</span>
              </div>
              <svg viewBox="0 0 20 20" fill="none" width="16" height="16" className={styles.contato__arrow}>
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            {/* Divisor */}
            <div className={styles.contato__divider}>
              <span>Nos siga nas redes</span>
            </div>

            {/* Redes sociais */}
            <div className={styles.contato__socials}>
              <a
                href="https://www.instagram.com/wteeletrica/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.contato__social_card} ${styles['contato__social_card--instagram']}`}
              >
                <div className={styles.contato__social_icon}>
                  <InstagramIcon />
                </div>
                <div className={styles.contato__social_info}>
                  <strong>Instagram</strong>
                  <span>@wteeletrica</span>
                </div>
                <svg viewBox="0 0 20 20" fill="none" width="14" height="14" className={styles.contato__arrow}>
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <a
                href="https://www.tiktok.com/@wteeletrica"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.contato__social_card} ${styles['contato__social_card--tiktok']}`}
              >
                <div className={styles.contato__social_icon}>
                  <TikTokIcon />
                </div>
                <div className={styles.contato__social_info}>
                  <strong>TikTok</strong>
                  <span>@wteeletrica</span>
                </div>
                <svg viewBox="0 0 20 20" fill="none" width="14" height="14" className={styles.contato__arrow}>
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/wteeletrica.wteeletrica?locale=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.contato__social_card} ${styles['contato__social_card--facebook']}`}
              >
                <div className={styles.contato__social_icon}>
                  <FacebookIcon />
                </div>
                <div className={styles.contato__social_info}>
                  <strong>Facebook</strong>
                  <span>WTE Elétrica</span>
                </div>
                <svg viewBox="0 0 20 20" fill="none" width="14" height="14" className={styles.contato__arrow}>
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contato;

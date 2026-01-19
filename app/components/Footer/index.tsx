import Image from 'next/image'
import styles from './style.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Coluna 1: Logo e direitos */}
        <div className={styles.column}>
          <div className={styles.logoWrapper}>
            <Image 
              src="/assets/asset 0.png" 
              alt="Personal Trainer Academy Logo" 
              width={160} 
              height={40}
              className={styles.logo}
            />
          </div>
          <p className={styles.text}>Personal Trainer Academy 2023©</p>
          <p className={styles.text}>Todos os direitos reservados</p>
        </div>

        {/* Coluna 2: Contato */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Contato</h3>
          <a
            href="https://wa.me/554199805007"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <Image 
              src="/assets/asset 27.svg" 
              alt="WhatsApp" 
              width={20} 
              height={20}
              className={styles.whatsappIcon}
            />
            +55 41 99805007
          </a>
        </div>

        {/* Coluna 3: Políticas */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Políticas</h3>
          <ul className={styles.list}>
            <li>
              <a href="#" className={styles.link}>
                Políticas de Privacidade
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Termo de Uso
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 4: Segurança */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Site Seguro</h3>
          <div className={styles.safeIcon}>
            <span className={styles.googleSafe}>Google Safe Browsing</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

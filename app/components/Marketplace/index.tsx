import Image from 'next/image'
import styles from './style.module.css'

const Marketplace = () => {
  return (
    <section className={styles.section}>
      {/* Parte superior: fundo vermelho com texto e ícone */}
      <div className={styles.top}>
        <div className={styles.topContent}>
          <div className={styles.leftText}>
            <h2 className={styles.heading}>
              Mercado de Trabalho da <br className={styles.br} /> Personal Trainer Academy
            </h2>
          </div>

          <div className={styles.iconContainer}>
            <Image
              src="/assets/asset 24.svg"
              alt="Ícone Marketplace"
              width={64}
              height={64}
              className={styles.icon}
            />
          </div>

          <div className={styles.rightText}>
            <h2 className={styles.heading}>
              Mercado de Trabalho da <br className={styles.br} /> Personal Trainer Academy
            </h2>
          </div>
        </div>
      </div>

      {/* Parte inferior: descrição sobre o marketplace */}
      <div className={styles.bottom}>
        <p className={styles.description}>
          Um marketplace exclusivo à disposição de todos os formados na Pós-graduação. Com inscrição gratuita e total liberdade
          para compartilhar seus dados de prestação de serviços e assim atrair alunos diretamente até você. Nossa equipe de
          marketing irá trabalhar para que este Marketplace alcance potenciais clientes aos inscritos.
        </p>
      </div>
    </section>
  )
}

export default Marketplace

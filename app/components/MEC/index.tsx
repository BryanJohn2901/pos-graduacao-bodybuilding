import Image from 'next/image'
import styles from './style.module.css'

const Mec = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Texto principal */}
          <div className={styles.textWrapper}>
            <p className={styles.text}>
              PÓS-GRADUAÇÃO RECONHECIDA PELO MINISTÉRIO DA EDUCAÇÃO (MEC)
            </p>
          </div>

          {/* Ícone à direita */}
          <div className={styles.iconWrapper}>
            <Image
              src="/assets/asset 22.svg"
              alt="Ícone MEC - Graduação"
              width={80}
              height={80}
              className={styles.icon}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mec

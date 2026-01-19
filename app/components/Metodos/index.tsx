import Image from 'next/image'
import styles from './style.module.css'

const Metodos = () => {
  return (
    <section className={styles.section}>
      <p className={styles.intro}>
        Aqui a sua evolução é constante e seus <span className={styles.highlight}>resultados são visíveis</span>,<br />
        através de um método que já formou mais de{' '}
        <span className={styles.highlight}>4 mil alunos</span>.
      </p>

      <div className={styles.container}>
        {/* Bloco da Esquerda */}
        <div className={styles.block}>
          <h3 className={styles.blockTitle}>Sistema expansão da prática</h3>
          <p className={styles.blockDesc}>
            O melhor sistema de aprendizado e prático desenvolvido pela Personal Trainer Academy
          </p>

          <div className={styles.imageWrapper}>
            <Image 
              src="/assets/ciclo1.webp" 
              alt="Sistema expansão da prática - Execução, Domínio, Conexão" 
              width={350} 
              height={350}
              className={styles.cicloImage}
            />
          </div>
        </div>

        {/* Bloco da Direita */}
        <div className={styles.block}>
          <h3 className={styles.blockTitle}>Ciclo de aprendizado constante</h3>
          <p className={styles.blockDesc}>O método que vai te fazer conquistar mais clientes</p>

          <div className={styles.imageWrapper}>
            <Image 
              src="/assets/ciclo2.webp" 
              alt="Ciclo de aprendizado constante - Conquista de Clientes" 
              width={350} 
              height={350}
              className={styles.cicloImage}
            />
          </div>
        </div>
      </div>

      <div className={styles.ctaWrapper}>
        <button className={styles.ctaButton}>Matricule-se agora</button>
      </div>
    </section>
  )
}

export default Metodos

import Image from 'next/image'
import styles from './style.module.css'

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      {/* Background image */}
      <div className={styles.backgroundImage}>
        <Image 
          src="/assets/asset 29.webp" 
          alt="Background" 
          fill 
          className={styles.bgImage}
          priority
        />
      </div>
      
      {/* Fundo gradiente escuro */}
      <div className={styles.backgroundOverlay}></div>

      {/* Container Principal Centralizado */}
      <div className={styles.heroContent}>
        
        {/* Lado esquerdo */}
        <div className={styles.leftContent}>
          <div className={styles.logoWrapper}>
            <Image 
              src="/assets/asset 0.png" 
              alt="Pós-Graduação Bodybuilding e Estética Corporal" 
              width={200} 
              height={50} 
              className={styles.logo} 
            />
          </div>

          <h1 className={styles.title}>BODYBUILDING E ESTÉTICA CORPORAL</h1>

          <p className={styles.description}>
            Descubra e aplique protocolos avançados de treinamento e gere grandes resultados estéticos no shape de seus atletas ou alunos de musculação.
          </p>

          <button className={styles.ctaButton}>Matricule-se agora</button>
        </div>

        {/* Lado direito - Vídeo do YouTube */}
        <div className={styles.videoContainer}>
          <iframe
            src="https://www.youtube.com/embed/70qvhAF8oqQ?rel=0"
            title="Personal Trainer Academy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.youtubeVideo}
          />
        </div>
      </div>

      {/* Faixa inferior de oferta - Fixa no rodapé */}
      <div className={styles.offerBanner}>
        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeContent}>
            {[...Array(10)].map((_, i) => (
              <div key={i} className={styles.marqueeItem}>
                <span>Oferta por tempo limitado</span>
                <span className={styles.dot}></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
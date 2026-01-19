import Image from 'next/image'
import styles from './style.module.css'

const Testemunhas = () => {
  return (
    <section className={styles.section}>
      {/* Background Image */}
      <div className={styles.backgroundImage}>
        <Image 
          src="/assets/asset 29.webp" 
          alt="Background" 
          fill 
          className={styles.bgImage}
        />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>O que os alunos estão dizendo</h2>

        <div className={styles.videoContainer}>
          <iframe
            src="https://www.youtube.com/embed/70qvhAF8oqQ?rel=0"
            title="Depoimentos dos Alunos - Personal Trainer Academy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.youtubeVideo}
          />
        </div>
      </div>
    </section>
  )
}

export default Testemunhas

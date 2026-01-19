'use client'

import Image from 'next/image'
import styles from './style.module.css'

const especialistas = [
  { modulo: '1', imagem: '/assets/asset 5.jpeg' },
  { modulo: '2', imagem: '/assets/asset 6.jpeg' },
  { modulo: '3', imagem: '/assets/asset 7.jpeg' },
  { modulo: '4', imagem: '/assets/asset 8.jpeg' },
  { modulo: '5', imagem: '/assets/asset 9.jpeg' },
  { modulo: '6', imagem: '/assets/asset 10.jpeg' },
]

const Especialistas = () => {
  // Duplicar os especialistas para criar efeito de loop infinito
  const duplicatedEspecialistas = [...especialistas, ...especialistas]

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Uma equipe de <span className={styles.highlight}>profissionais especializados</span> que irão te <br />
        guiar no caminho do sucesso.
      </h2>

      <div className={styles.carouselWrapper}>
        <div className={styles.carouselTrack}>
          {duplicatedEspecialistas.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <Image 
                  src={item.imagem} 
                  alt={`Módulo ${item.modulo}`} 
                  fill 
                  className={styles.cardImage}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Especialistas

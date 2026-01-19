'use client'

import Image from 'next/image'
import styles from './style.module.css'

const data = [
  {
    icon: '/assets/asset 17.svg',
    title: 'Horário Flexível',
    description: (
      <>
        As aulas serão ministradas um final de semana por mês, <br />
        <span className={styles.highlight}>
          no sábado à tarde – 13h30 às 18h e Domingo de manhã – 8h às 12h30.
        </span>
      </>
    ),
  },
  {
    icon: '/assets/asset 18.svg',
    title: 'Aula Ao Vivo',
    description: (
      <>
        Você poderá assistir a aula ao vivo <br />
        ou a <span className={styles.highlight}>gravação que ficará disponível</span> para assistir quando quiser.
      </>
    ),
  },
  {
    icon: '/assets/asset 19.svg',
    title: 'Artigos Atualizados',
    description: (
      <>
        Artigos sobre o assunto, recentes, selecionados e{' '}
        <span className={styles.highlight}>disponíveis para você.</span>
      </>
    ),
  },
  {
    icon: '/assets/asset 20.svg',
    title: 'Avaliações Dinâmicas',
    description: (
      <>
        Desenvolva suas habilidades e aplique seus conhecimentos{' '}
        <span className={styles.highlight}>através das nossas avaliações ativas.</span>
      </>
    ),
  },
  {
    icon: '/assets/asset 22.svg',
    title: 'Método EspecialistaPro',
    description: (
      <>
        O método <span className={styles.highlight}>Especialista PRO</span>, parte essencial da Pós-graduação, 
        foi criado para que você aplique o Bodybuilding de forma prática, elevando sua credibilidade.
      </>
    ),
  },
]

const Beneficios = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        <span className={styles.highlight}>Abordagem prática</span> e exemplos do seu dia a dia com:
      </h2>

      <div className={styles.carouselWrapper}>
        <div className={styles.carouselTrack}>
          {/* Primeiro conjunto de cards */}
          {data.map((item, i) => (
            <div key={`first-${i}`} className={styles.card}>
              <div className={styles.iconWrapper}>
                <Image src={item.icon} alt={item.title} width={48} height={48} className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          ))}
          {/* Duplicado para loop infinito */}
          {data.map((item, i) => (
            <div key={`second-${i}`} className={styles.card}>
              <div className={styles.iconWrapper}>
                <Image src={item.icon} alt={item.title} width={48} height={48} className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.buttonWrapper}>
        <button className={styles.ctaButton}>Matricule-se agora</button>
      </div>
    </section>
  )
}

export default Beneficios

import Image from 'next/image'
import styles from './style.module.css'

const audienceData = [
  {
    icon: '/assets/asset 22.svg',
    description:
      'Que querem aprender com os maiores treinadores e professores do Brasil e se destacar como um especialista em bodybuilding, mesmo que você atenda apenas alunos e não atletas.',
  },
  {
    icon: '/assets/asset 24.svg',
    description:
      'Para profissionais que buscam resultados estéticos rápidos e impressionantes para seus alunos. Profissionais que desejam dominar técnicas capazes de transformar o físico de seus alunos em um prazo curto, utilizando estratégias eficazes comprovadas no mundo do bodybuilding.',
  },
  {
    icon: '/assets/asset 23.svg',
    description:
      'Para profissionais que querem aplicar estratégias de treinamento de elite, mesmo em alunos não competitivos e que pretende destravar o seu potencial e ganhar mais de 15 mil reais com o domínio de conhecimentos práticos e inovadores, se tornando autoridade como Personal Trainer.',
  },
  {
    icon: '/assets/asset 22.svg',
    description:
      'Profissionais interessados em aprender e aplicar métodos de treinamento utilizados por atletas de elite do bodybuilding para potencializar a estética e a performance física de alunos que não competem.',
  },
]

const PublicoAlvo = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Uma Pós-graduação feita para <span className={styles.highlight}>profissionais</span>...
      </h2>

      <div className={styles.grid}>
        {audienceData.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconWrapper}>
              <Image 
                src={item.icon} 
                alt="Ícone" 
                width={40} 
                height={40}
                className={styles.icon}
              />
            </div>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PublicoAlvo

import styles from './style.module.css'

const courseModules = [
  'Da emoção à razão: como fazer seu cliente entender que o sucesso só depende dele?',
  'Casos de lantanga 4.0 construindo donas de respeito',
  'Peitoral e Deltóides: prescrição multiplanar',
  'Treinando braços: bíceps, tríceps e antebraços.',
  'Como identificar e corrigir desvios posturais que atrapalham um físico de sucesso',
  'Comendo para o sucesso: nutrição aplicada ao bodybuilding',
  'Como treinar e periodizar para ganhar campeonatos?',
  'Treino para ter um shape de sucesso',
  'Maior e Mais Forte: a importância da força máxima para hipertrofia muscular',
  'Além da nutrição convencional: como escolher suplementos alimentares para treinar melhor',
  'Estratégias de cardio para potencializar resultados estéticos',
  'Abdomen definido: treinamento abdominal e linha de cintura',
  'Métodos estratégicos de treinamento para hipertrofia',
  'Critérios de seleção dos exercícios e prescrição do treino para posteriores de coxas',
  'Como treinar o quadríceps femoral para o máximo desenvolvimento',
  'Prescrição em 3D para obter os glúteos definidos',
  'Hormônios e recursos ergogênicos farmacológicos para hipertrofia muscular',
  'Desfilando como campeões: os segredos para apresentar um físico incrível em qualquer lugar',
]

const Modulos = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        <span className={styles.highlight}>18 meses de puro conhecimento e</span> aprendizado sobre Bodybuilding
      </h2>

      <div className={styles.grid}>
        {courseModules.map((module, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.cardTitle}>Módulo {String(index + 1).padStart(2, '0')}</h3>
            <p className={styles.cardText}>{module}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Modulos

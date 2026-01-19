'use client'

import { useState } from 'react'
import styles from './style.module.css'

const faqItems = [
  {
    question: 'Quais são as Formas de Pagamento?',
    answer:
      'Aceitamos diversas formas de pagamento, incluindo cartão de crédito, boleto bancário e pix. Consulte as condições específicas na página de matrícula.',
  },
  {
    question: 'Como acesso o conteúdo?',
    answer:
      'Todo o conteúdo é disponibilizado em nossa plataforma online exclusiva. Após a matrícula, você receberá acesso com login e senha para começar seus estudos imediatamente.',
  },
  {
    question: 'Qual número total de horas da Pós?',
    answer:
      'A pós-graduação possui um total de 360 horas de carga horária, incluindo aulas, atividades complementares e avaliação.',
  },
  {
    question: 'Possui certificado de conclusão?',
    answer:
      'Sim, ao concluir o curso e cumprir todos os requisitos, você receberá um certificado de pós-graduação reconhecido pelo MEC.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Lado esquerdo */}
        <div className={styles.left}>
          <p className={styles.subtitle}>F.A.Q.</p>
          <h2 className={styles.title}>Perguntas Frequentes</h2>
          <p className={styles.description}>
            Ficou com mais alguma dúvida? Tire rapidamente pelo WhatsApp da nossa equipe!
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=SEU_NUMERO_WHATSAPP&text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20a%20p%C3%B3s-gradua%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            TIRAR DÚVIDAS
          </a>
        </div>

        {/* Lado direito */}
        <div className={styles.right}>
          {faqItems.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <button className={styles.question} onClick={() => toggleFAQ(index)}>
                {item.question}
                <span className={styles.toggle}>{openIndex === index ? '-' : '+'}</span>
              </button>
              {openIndex === index && <div className={styles.answer}>{item.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

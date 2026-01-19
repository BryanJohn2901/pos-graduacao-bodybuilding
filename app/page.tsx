import React from 'react'
import Hero from './components/Hero'
import Mec from './components/MEC'
import Especialistas from './components/Especialistas'
import Beneficios from './components/Beneficios'
import Metodos from './components/Metodos'
import Marketplace from './components/Marketplace'
import PublicoAlvo from './components/PublicoAlvo'
import Modulos from './components/Modulos'
import Testemunhas from './components/Testemunhas'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import PageWrapper from './components/PageWrapper'

const page = () => {
  return (
    <PageWrapper>
      <Hero />
      <Especialistas />
      <Mec />
      <Beneficios />
      <Metodos />
      <PublicoAlvo />
      <Modulos />
      <Marketplace />
      <Testemunhas />
      <FAQ />
      <Footer />
    </PageWrapper>
  )
}

export default page

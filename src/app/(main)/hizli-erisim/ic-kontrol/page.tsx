import Accordion from '@/components/Accordion'
import React from 'react'
import InfoCard from '@/components/InfoCard'

const page = () => {
  return (
    <div>
      <Accordion/>
    <main className="flex justify-center items-start min-h-screen pt-20 pb-4 bg-gray-100"><InfoCard title="Organizasyon Şeması" /></main>      
    </div>
  )
}

export default page
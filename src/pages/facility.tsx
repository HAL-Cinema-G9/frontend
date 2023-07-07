import Footer from '@/components/Footer';
import TopInfo from '@/components/Facility/TopInfo';
import MiddleInfo from '@/components/Facility/MiddleInfo';
import BottomInfo from '@/components/Facility/BottomInfo';
import Navbar from '@/components/Navbar';

import React from 'react'

const Facility = () => {
  return (
    <>
      <main>
        <Navbar />
        <TopInfo />
        <MiddleInfo />
        <BottomInfo />
        <Footer />
      </main>
    </>
  )
}

export default Facility
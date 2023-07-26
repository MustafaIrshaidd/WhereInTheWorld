import React from 'react'

import FlagsContainer from '../../Components/FlagsContainer'
import FlagsFilter from '../../Components/FlagsFilter'

const HomePage = () => {
  return (
    <>
    <main>
        <FlagsFilter/>
        <FlagsContainer/>
    </main>
    </>
  )
}

export default HomePage
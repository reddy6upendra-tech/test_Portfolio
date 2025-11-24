import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'

const App = () => {
  return (
    <div>
      <Section1/>
      <hr className='h-1 bg-black'/>
      <Section2/>
    </div>
  )
}

export default App

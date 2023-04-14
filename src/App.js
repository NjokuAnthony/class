import React from 'react'
import Header from './componets/Header'
import Feature from './componets/Feature'
import About from './componets/About'
import aboutimage from './images/Frame 19.png'
import aboutimage1 from './images/download.png'

function App() {
  return (
    <div className='App'>
      
      <Header />
      <Feature />
      <About image={aboutImage} title='Comes with All You Need for Daily Life' button='Get The App' />
      <About image={aboutImage1} title='Download And Get The App Now' button='Download' />
    </div>
  );
}

export default App
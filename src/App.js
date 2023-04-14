import React from 'react'
import Header from './componets/Header'
import Feature from './componets/Feature'
import About from './componets/About'
import Presentation from './componets/Presentation'
import aboutimage from './images/Frame 19.png'
import aboutimage1 from './images/download.png'
import Contact from './componets/Contact'


function App() {
  return (
    <div className='App'>
      
      <Header />
      <Feature />
      <About image={aboutimage} title='Comes with All You Need for Daily Life' button='Get The App' />
      <Presentation />
      <About image={aboutimage1} title='Download And Get The App Now' button='Download' />
      <Contact />
    </div>
  );
}

export default App
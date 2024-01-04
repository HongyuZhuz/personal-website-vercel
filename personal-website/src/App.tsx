import './App.css'
import { HeroSection } from './components/heroSection'
import { AboutMe } from './components/about'
import { MyEducationSection } from './components/education'
import { Designer } from './components/designer'
import { Footer } from './components/footer'
import { SpeedInsights } from '@vercel/speed-insights/react';
import { MyCareer } from './components/myCareer'


function App() {
  
  return (
    <div>
      <SpeedInsights />
      <HeroSection />
      <AboutMe />
      <MyEducationSection />
      <MyCareer />
      <Designer />
      <Footer />
    </div>
    
  )
}

export default App

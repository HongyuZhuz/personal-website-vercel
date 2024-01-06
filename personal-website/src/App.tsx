import './App.css'
import { HeroSection } from './components/heroSection'
import { AboutMe } from './components/about'
import { MyEducationSection } from './components/education'
import { Designer } from './components/designer'
import { Footer } from './components/footer'
import { SpeedInsights } from '@vercel/speed-insights/react';
import { MyCareer } from './components/myCareer'
import {MyHobbyPage} from './components/hobbie'
import { ContactInfo } from './components/contactInfo'


function App() {
  
  return (
    <div>
      <SpeedInsights />
      <HeroSection />
      <AboutMe />
      <MyEducationSection />
      <MyCareer />
      <Designer />
      <MyHobbyPage />
      <ContactInfo />
      <Footer />
    </div>
    
  )
}

export default App

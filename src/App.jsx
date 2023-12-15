// import './Components/Main.css'
import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import {Section1}  from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'
import Section3 from './Components/Section3/Section3'
// import {Section3D} from './Components/Section3D/Section3'
import Section4 from './Components/Section4/Section4'
import Section5 from './Components/Section5/Section5'
import Section6 from './Components/Section6/Section6'
import Section7 from './Components/Section7/Section7'
import Section8 from './Components/Section8/Section8'
import Section9 from './Components/Section9/Section9'

function App() {


  return (
    <>
      <Navbar/>
      <Section1/>
      <Section2 />
      <Section3/>
      {/* <Section3D/> */}
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
      <Section9/>
      <Footer/>
    </>
  )
}

export default App

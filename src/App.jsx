import './App.css'
import Header from './components/header'
import Home from './components/home'
import {  Routes , Route} from 'react-router-dom'
import Projects from './components/projects'
import Footer from './components/footer'
import Timeline from './components/Timeline'
import {BrowserRouter} from 'react-router-dom'
import Certificates from './components/Certificates'
import Contact from './components/contact'


function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="features" element={<Timeline/>}>Sachin</Route>
      <Route exact path="cta"element={<Projects/>}></Route>
      <Route exact path="cert" element={<Certificates/>}></Route>
      <Route exact path="contact" element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App

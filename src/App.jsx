import './App.css'
import Header from './components/header'
import Home from './components/home'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import CTA from './components/cta'
import Footer from './components/footer'
import Timeline from './components/Timeline'


function App() {
  return (
    <>
    <Router>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="features" element={<Timeline/>}></Route>
      <Route exact path="cta" element={<CTA/>}></Route>
    </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App

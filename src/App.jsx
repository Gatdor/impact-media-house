import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Project from './pages/Project.jsx'
import Contact from './pages/Contact.jsx'
import Privacy from './pages/Privacy.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return <Routes><Route element={<Layout />}><Route index element={<Home />} /><Route path="about" element={<About />} /><Route path="services" element={<Services />} /><Route path="portfolio" element={<Portfolio />} /><Route path="portfolio/:slug" element={<Project />} /><Route path="contact" element={<Contact />} /><Route path="privacy" element={<Privacy />} /><Route path="*" element={<NotFound />} /></Route></Routes>
}

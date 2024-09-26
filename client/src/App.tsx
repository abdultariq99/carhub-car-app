import './App.css'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Catalogue } from './components/Catalogue'

function App() {
  
  return (
    <main className='h-screen w-screen relative overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Catalogue />
    </main>
  )
}

export default App

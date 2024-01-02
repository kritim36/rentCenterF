
import { RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './globals/components/navbar/Navbar'
import router from './routes'
import Footer from './globals/components/footer/Footer'

function App() {
  

  return (
    <>
    <Navbar />
     <RouterProvider router = {router} />
     <Footer />
    </>
  )
}

export default App

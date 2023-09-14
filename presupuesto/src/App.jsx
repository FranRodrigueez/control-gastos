import { useState } from 'react'
import Header from './components/Header'



function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [esValidoPresupuesto, setEsValidoPresupuesto] = useState(false)

  return (
    <>
      <div>
      <Header
      
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}
        esValidoPresupuesto = {esValidoPresupuesto}
        setEsValidoPresupuesto = {setEsValidoPresupuesto}
      
      />
      </div>
     
    </>
  )
}

export default App

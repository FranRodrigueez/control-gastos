import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal'


function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [esValidoPresupuesto, setEsValidoPresupuesto] = useState(false)
  
  const[modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const handleNuevoGasto = () => {
    setModal(true)

    setTimeout (() => {
      setAnimarModal(true)
    }, 700)

  }

  return (
    
    <div>
      <Header
      
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}
        esValidoPresupuesto = {esValidoPresupuesto}
        setEsValidoPresupuesto = {setEsValidoPresupuesto}
      
      />
      
      
      {esValidoPresupuesto && (
        <div className='nuevo-gasto'>
          <img  
            src = {IconoNuevoGasto}
            alt='icono-gasto'
            onClick={handleNuevoGasto}
          /> 
        </div>
      )}

      {modal && 
      <Modal 
        setModal = {setModal} 
        animarModal = {animarModal}
        setAnimarModal = {setAnimarModal}
      />}  

    </div>
      
       
    
  )
}

export default App

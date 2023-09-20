import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import { generarID } from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'



function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [esValidoPresupuesto, setEsValidoPresupuesto] = useState(false)
  const [gastos, setGastos] = useState([])
  
  const[modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const handleNuevoGasto = () => {
    setModal(true)

    setTimeout (() => {
      setAnimarModal(true)
    }, 700)

  }

  const guardarGasto = gasto => {
    gasto.id = generarID()
    setGastos([...gastos, gasto])

    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500)
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
        guardarGasto = {guardarGasto}
      />}  

    </div>
      
       
    
  )
}

export default App

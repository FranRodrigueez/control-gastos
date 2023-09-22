import { useState } from 'react'
import Header from './components/Header'
import ListadoGasto from './components/ListadoGasto'
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
    gasto.fecha = Date.now()
    setGastos([...gastos, gasto])

    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500)
  }

  return (
    
    <div className={modal ? "fijar" : ""}>
      <Header

        gastos = {gastos}
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}
        esValidoPresupuesto = {esValidoPresupuesto}
        setEsValidoPresupuesto = {setEsValidoPresupuesto}
      
      />
      
      
      {esValidoPresupuesto && (
        <>
          <main>
            <ListadoGasto
              gastos = {gastos}            
            /> 
          </main>
          <div className='nuevo-gasto'>
            <img  
              src = {IconoNuevoGasto}
              alt='icono-gasto'
              onClick={handleNuevoGasto}
            /> 
          </div>
        </>
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

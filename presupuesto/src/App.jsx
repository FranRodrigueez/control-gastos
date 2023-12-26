import { useState, useEffect } from 'react'
import Header from './components/Header'
import Filtros from './components/Filtros'
import ListadoGasto from './components/ListadoGasto'
import Modal from './components/Modal'
import { generarID } from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'




function App() {

  const [gastos, setGastos] = useState(
    localStorage.getItem("gastos") ? 
    JSON.parse(localStorage.getItem("gastos")) : []
  )

  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem("presupuesto")) ?? 0
  )

  const [esValidoPresupuesto, setEsValidoPresupuesto] = useState(false)
  
  
  const[modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastoEditar, setGastoEditar] = useState({})

  const [filtro, setFiltro] = useState("")
  const [gastosFiltrados, setGastosFiltrados] = useState([])

  useEffect(()=>{
    if(Object.keys(gastoEditar).length > 0){
      setModal(true)
      setTimeout (() => {
      setAnimarModal(true)
    }, 500)
    }
  }, [gastoEditar])

  //Guardar el presupuesto en localStorage
  useEffect(() => {
    localStorage.setItem("presupuesto", presupuesto ?? 0)
  }, [presupuesto])

  //Guardar el gasto el localStorage
  useEffect(() =>{
    localStorage.setItem("gastos", JSON.stringify(gastos) ?? [])
  }, [gastos])

  //Escucha por los cambios que sucedan en filtro
  useEffect(() =>{
    if(filtro){
      //Filtrar gastos por categoría
      const gastosFiltrados = gastos.filter(gasto => gasto.categoria ===
        filtro)
      
      setGastosFiltrados(gastosFiltrados)
    }
  },[filtro])

  //Si el presupuesto es > 0, pasar a presupuesto válido
  useEffect(()=>{
    const presupuestoLS = Number(localStorage.getItem("presupuesto") ?? 0)

    if(presupuestoLS > 0){
      setEsValidoPresupuesto(true)
    }
  }, [])

  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})

    setTimeout (() => {
      setAnimarModal(true)
    }, 500)

  }

  const guardarGasto = gasto => {
    if(gasto.id){
      //Actualizar gasto
      const gastosActualizados = gastos.map (gastoState => gastoState.id ===
        gasto.id? gasto : gastoState)
      setGastos(gastosActualizados)  
      setGastoEditar({})
    } else{
      //Nuevo gasto
      gasto.id = generarID()
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
    }
    
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500)
  }

  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id)
    setGastos(gastosActualizados)
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
            <Filtros
              filtro = {filtro}
              setFiltro = {setFiltro}
            />
            <ListadoGasto
              gastos = {gastos}   
              setGastoEditar = {setGastoEditar}  
              eliminarGasto = {eliminarGasto}   
              filtro = {filtro}
              gastosFiltrados = {gastosFiltrados}


            /> 
          </main>
          <div className = 'nuevo-gasto'>
            <img  
              src = {IconoNuevoGasto}
              alt ='icono-gasto'
              onClick = {handleNuevoGasto}
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
        gastoEditar = {gastoEditar}
        setGastoEditar = {setGastoEditar}
      />}  

    </div>
      
       
    
  )
}

export default App

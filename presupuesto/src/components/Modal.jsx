import CerrarBtn from '../img/cerrar.svg'
import { useState } from 'react'

const Modal = ({setModal, animarModal, setAnimarModal}) => {

  const ocultarModal = () =>{
    setAnimarModal(false)

    setTimeout(() => {
      setModal(false)
    }, 700)
  }

  const [Nombregasto, setNombreGasto] = useState("")
  const [cantidadGastada, setCantidadGastada] = useState()
  const [categoria, setCategoria] = useState("") 

  return (
    <div className="modal">

      <div className="cerrar-modal">
            <img
                src={CerrarBtn}
                alt="Cerrar modal"
                onClick={ocultarModal}
                className='boton-cerrar'
            />
      </div>

      <form className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
        <legend>Nuevo Gasto</legend>

        {/* Nombre del gasto*/}
        <div className='campo'>

          <label htmlFor="nombreGasto">Nombre Gasto</label>
          <input
            id='nombreGasto'
            type='text'
            placeholder="Añade el nombre del gasto"
            value={Nombregasto}
            onChange={e => setNombreGasto(e.target.value)}
          />

        </div>

        {/* Cantidad gastada*/}
        <div className='campo'>

          <label htmlFor="cantidad">Cantidad</label>
          <input
            id='cantidad'
            type='number'
            placeholder='Añade la cantidad del gasto'
            value={cantidadGastada}
            onChange={e => setCantidadGastada(Number(e.target.value))}
          />

        </div>

        {/* Categoría del gasto*/}
        <div className='campo'>

          <label htmlFor="categoria">Categoria</label>
          <select
            id='categoria'
            value={categoria}
            onChange={e => setCategoria(e.target.value)}
          >
            <option value="">--Seleccione--</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos varios">Gastos varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>

        </div>

        {/* Botón añadir*/}
        <input
          type='submit'
          value="Añadir gastos"
        />



      </form>

    </div>
  )
}

export default Modal


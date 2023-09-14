import CerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal}) => {

  const ocultarModal = () =>{
    setModal(false)
  }

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

    </div>
  )
}

export default Modal


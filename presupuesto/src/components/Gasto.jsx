import React from 'react'
import { formatearFecha } from '../helpers'

import IconoAhorro from '../img/icono_ahorro.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'
import IconoGasto from '../img/icono_gastos.svg'

const diccionarioIconos = {
    
        ahorro : IconoAhorro,
        comida : IconoComida,
        casa: IconoCasa,
        gastos: IconoGasto,
        ocio: IconoOcio,
        salud: IconoSalud,
        suscripciones: IconoSuscripciones
}


const Gasto = ({gasto}) => {

  const {nombreGasto, cantidadGastada, categoria, id, fecha} = gasto  
    return (
        <div className='gasto sombra'>
            <div className='contenido-gasto'>
                <img
                    src={diccionarioIconos[categoria]}
                    alt='Icono gasto'
                />
                <div className='descripcion-gasto'>
                    <p className='categoria'>{categoria}</p>
                    <p className='nombre-gasto'>{nombreGasto}</p>
                    <p className='fecha-gasto'>
                        Agregado el: {""}
                        <span>{formatearFecha(fecha)}</span>
                    </p>
                </div>
            </div>
            <p className='cantidad-gasto'>{cantidadGastada}€</p>  
        </div>
        
    )
}

export default Gasto

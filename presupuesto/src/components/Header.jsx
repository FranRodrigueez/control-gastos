import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"

const Header = ({
  gastos,
  setGastos,
  presupuesto, 
  setPresupuesto, 
  esValidoPresupuesto, 
  setEsValidoPresupuesto, 
  }) => {
  return (
    <header>
        <h1>Planificador de gastos</h1>

        {esValidoPresupuesto ? (
          <ControlPresupuesto
            gastos={gastos}  
            setGastos = {setGastos}
            presupuesto = {presupuesto}
            setPresupuesto = {setPresupuesto}  
            setEsValidoPresupuesto = {setEsValidoPresupuesto}       
          />)
          :  
          (
            <NuevoPresupuesto
            presupuesto = {presupuesto}
            setPresupuesto= {setPresupuesto}
            setEsValidoPresupuesto = {setEsValidoPresupuesto}   
          />)}

        
    </header>
  )
}

export default Header

import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"

const Header = ({presupuesto, setPresupuesto, esValidoPresupuesto, setEsValidoPresupuesto, gastos}) => {
  return (
    <header>
        <h1>Planificador de gastos</h1>

        {esValidoPresupuesto ? (
          <ControlPresupuesto
            presupuesto = {presupuesto}
            gastos={gastos}
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

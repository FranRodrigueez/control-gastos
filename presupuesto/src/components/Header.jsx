import NuevoPresupuesto from "./NuevoPresupuesto"

const Header = ({presupuesto, setPresupuesto, esValidoPresupuesto, setEsValidoPresupuesto}) => {
  return (
    <header>
        <h1>Planificador de gastos</h1>

        {esValidoPresupuesto ? (<p>Control Presupuesto</p>)
        :  (
            <NuevoPresupuesto
            presupuesto = {presupuesto}
            setPresupuesto= {setPresupuesto}
            setEsValidoPresupuesto = {setEsValidoPresupuesto}   
          />)}

        
    </header>
  )
}

export default Header

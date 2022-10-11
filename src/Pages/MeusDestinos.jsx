import Header from "../components/header";
import { Counter } from "../Features/Counter/counter";
import { useSelector, useDispatch } from 'react-redux'
import { removeDestino } from "../Features/Counter/counterSlice";
import './MeusDestinos.css'



function MeusDestinos () {

   const destinos = useSelector ((state) => state.counter.destinos)
   const dispatch = useDispatch ()

   function removeAdicionar (dados) {
    dispatch(removeDestino(dados))
    }

    
    return (
        <>
        <Header/>
            <h2>Meus Destinos</h2>
            <hr/>
            {destinos.map((dest) => {
                return <div className="destinosAdc">
                    <div className="dadosPais">
                        País: {dest.name.common}
                        <br/>
                        Capital: {dest.capital}
                    </div>
                    <button className="btnRemove" onClick={() => removeAdicionar(dest.ID)}>Remover destino</button>
                </div>
            })}
 
          
            
        </>
    )
}

export default MeusDestinos;
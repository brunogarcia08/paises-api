import { Routes, Route } from 'react-router-dom';
import Inicio from './Inicio'
import Detalhes from './Pages/Detalhes';
import Contatos from "./Pages/Contatos";
import Empresa from "./Pages/Empresa";
import InforDetalhes from "./Pages/InforDetalhes";
import MeusDestinos from './Pages/MeusDestinos';


function App() {

  return (
    <div>
      <Routes>
        <Route index element={<Inicio/>}/>
        <Route path='/Detalhes' element={<Detalhes/>}/>
        <Route path='/Contatos' element={<Contatos/>}/>
        <Route path='/Empresa' element={<Empresa/>}/>
        <Route path='/MeusDestinos' element={<MeusDestinos/>}/>
        <Route path='/InforDetalhes/:informacaoBandeira' element={<InforDetalhes/>}/>
      </Routes>
      
      
    </div>
  )

}

export default App; 

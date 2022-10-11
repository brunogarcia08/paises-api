import { Link } from 'react-router-dom';
import './MenuPrincipal.css';

function MenuPrincipal () {

    return (
        <>
      
            <ul className="listMenu">
                <li>
                    <Link to='/Detalhes'>Detalhes</Link>
                </li>
                <li>
                    <Link to='/Contatos'>Contatos</Link>
                </li>
                <li>
                    <Link to='/Empresa'>Empresa</Link>
                </li>
                <li>
                    <Link to='/MeusDestinos'>Meus Destinos</Link>
                </li>
               
            </ul>
        </>
    )
}

export default MenuPrincipal;   
import { Link } from 'react-router-dom';
import './header.css'
import MenuPrincipal from './MenuPrincipal';


function Header () {

    return (
        <header className="header">
           <Link to='/'> <h1 className='title'>Where in the world?</h1> </Link> 
            <MenuPrincipal/>
        </header>
    )
}

export default Header;
import { Link, NavLink } from 'react-router-dom';


export const Header = () => {
    return (
                <nav className="navbar navbar-expand-sm menu">
                    
                    <Link 
                        className="navbar-brand navColor" 
                        to="/home"
                    >
            <img className="logo"  src="src\Logo\Logo.png"/>
                    </Link>
        
                    <div className="navbar-collapse menuNavbar">
                        <div className="navbar-nav">
        
                            <NavLink 
                                className="nav-item nav-link navColor" 
                                to="/home"
                            >
                                Inicio
                            </NavLink>
        
                            <NavLink 
                                className={ ({isActive}) => `nav-item nav-link navColor ${ isActive ? 'active':'' }` }
                                to="/catalogo"
                            >
                                Catálogo
                            </NavLink>

                            <NavLink 
                                className="nav-item nav-link navColor" 
                                to="/Login"
                            >
                                Iniciar Sesión
                            </NavLink>
                        </div>
                    </div>
                </nav>
    )
}
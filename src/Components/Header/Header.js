
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {

//Jsx 
return (
<>        
      <header>
        <div className="Header-g"> 
            <img  className="Header-g_1" src="/images/logo/LOGO_mobile.svg" alt="Logo"></img>           
            <div className="Header-g_2">
               <Link to="/" ><span className="Header-g_2_1 caract-12p">ACCUEIL</span></Link>
               <Link to="/a_propos" ><span className="Header-g_2_2 caract-12p">A PROPOS</span></Link>
            </div>               
        </div>	
      </header>
</>
);
  }
export default Header

import './Erreur.css' 
import { Link } from 'react-router-dom'
import Header    from '../../Components/Header/Header'
import Footer    from '../../Components/Footer/Footer'

function ErreurComposant1() {

return (
<>	
<div className="pages-Erreur">		
  <div className="main-container-Erreur">   
    <Header/>  
    <main>
     <section>   
        <div className="pages-g-erreur-mobile">
          <div className="pages-g-erreur-mobile_1 caract-96p cl_1">404</div>
          <div className="pages-g-erreur-mobile_2 caract-18p cl_1">Oups! La page que Vous demandez n'existe pas.</div>	                                                         
          <div className="pages-g-erreur-mobile_3"><Link to="/" ><span className='pages-g-erreur-mobile_3_1 caract-14p'>Retourner sur la page d'accueil</span></Link></div>          
        </div>
    </section> 	 
    </main>	  
  </div>
    <Footer/>
</div>










</>

  );
}

export default ErreurComposant1
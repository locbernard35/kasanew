
import './CartsHome.css'
import { Link } from 'react-router-dom'
import data from '../../ServeurDb/logements.json';


function CartsHome() {

return ( 
<>
<div className="CartsHome-G">	
        <div className='Container-CartsHome'>
          {data.map((map2) => (
          <div className='box' key={map2.id}>            
               <Link to={`/FicheLogement/${map2.id}`}>            
                  <img  className="CartsHomeCoverImg" src={map2.cover} alt="Titre de la location"/>
                   <div  className="CartsHomeTitle caract-18p700 cl_b">{map2.title} </div>
             </Link>          
          </div>     
          
           ))}
        </div>   
</div>
</>
  );
}
export default CartsHome
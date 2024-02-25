
import './Equipements.css'
import { useState }         from 'react'

function Equipements(props) {  
  
const equipements = props.equipements;
const [EquipementsOpen, setEquipements] = useState(false);

return EquipementsOpen ? (
<>  
    <div className="Equipements-G">   
      <div onClick={() => setEquipements(false)} className='Equipements-G_1'>
        <div className='Equipements_txt caract-13p cl_b'>Equipements</div>
        <div className='Equipements_icon'><i className="fa-solid fa-angle-down Description-flech"></i></div>
      </div>
     <div className='Equipements-Content caract-12p'>      
             {equipements.map((equipementsMap2) => (
              <div className='equipements-map' key={equipementsMap2.toString()}>        
                <div className="equipements-map_1"> {equipementsMap2}</div> 
             </div>     
                                                  ))}
      </div>      
    </div>
</>
):(
<> 

  <div className="Equipements-G">   
    <div onClick={() => setEquipements(true)} className='Equipements-G_1'>
      <div className='Equipements_txt caract-13p cl_b'>Equipements</div>
      <div className='Equipements_icon'><i className="fa-solid fa-angle-up Equipements-flech"></i></div>
    </div>   
  </div>

</>
)
}
export default Equipements
import './Description.css'
import { useState }         from 'react'

function Description(props) {  
  
const description = props.description;
const [isOpen, setIsOpen] = useState(false)//defaut etat 

return isOpen ? (
<> 
<div className="Description-G">   
      <div onClick={() => setIsOpen(false)} className='Description-G_1'>
        <div className='Description_txt caract-13p cl_b'>Description</div>
        <div className='Description_icon'><i className="fa-solid fa-angle-down Description-flech"></i></div>
      </div>
    <div className='Description-Content caract-12p'>{description}</div>      
</div>
</>
):(
<> 
<div className="Description-G">   
  <div onClick={() => setIsOpen(true)} className='Description-G_1'>
    <div className='Description_txt caract-13p cl_b'>Description</div>
    <div className='Description_icon'><i className="fa-solid fa-angle-up Description-flech"></i></div>
  </div>   
</div>
</>
)
}
export default Description
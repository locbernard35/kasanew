
import { useState } from 'react'
import './InfoAProposChildren.css'

function InfoAProposChildren(props) {

const [InfoAPropos, setInfoAPropos] = useState(false)//defaut etat 
const titresInfoAPropos  =  props.titresInfoAPropos;
const ContentInfoAPropos =  props.ContentInfoAPropos;

//condition ternaire 
return InfoAPropos ? (
<>    
    <div className="InfoAPropos-G_1" onClick={() => setInfoAPropos(false)}>				
      <div className="InfoAPropos-G_1_1">
        <span className="InfoAPropos-G_1_1_1-txt">{titresInfoAPropos}</span>
      </div> 
      <div className="InfoAPropos-G_1_2">
        <i className="fa-solid fa-angle-down InfoAPropos-G_1_2_1-flech"></i>
      </div> 
    </div> 

    <div className="InfoAPropos-G_2">
      <div className='InfoAPropos-G_2_1-txt'>
        {ContentInfoAPropos}
      </div>
    </div>
</>
):(
<> 
    <div className="InfoAPropos-G_1 InfoAPropos-G_1-Margin" onClick={() => setInfoAPropos(true)}>				
      <div className="InfoAPropos-G_1_1">
         <span className="InfoAPropos-G_1_1_1-txt">{titresInfoAPropos}</span>
      </div> 
       <div className="InfoAPropos-G_1_2">
      <i className="fa-solid fa-angle-up InfoAPropos-G_1_2_1-flech"></i>
       </div> 
  </div> 
</>
)
}
export default InfoAProposChildren
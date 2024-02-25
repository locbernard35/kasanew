import { useState }         from 'react'
import './SliderHome.css'

function SliderHome(props) {

const SliderPictures              = props.datapictures;
const SliderPicturesCount         = SliderPictures.length ;
const SliderPicturesCountNumber   = parseInt(SliderPicturesCount);
const [index, setupdateIndex]     = useState(0);

function BtClikLeft(){	

let CountElemsSlider = SliderPictures.length-1;

if (index === CountElemsSlider) {
  setupdateIndex(0);
     return;
}
  setupdateIndex(index + 1);
} 


function BtClikRight(){

  let CountElemsSlider = SliderPictures.length-1;

  if (index === 0) {
  setupdateIndex(CountElemsSlider);
    return;
  }
  setupdateIndex(index -1);
}



return (   
<> 
  <div id="banner">
		<img className="banner-img" src={SliderPictures[index]} alt="Banner Print-it"/> 	  
    {

     SliderPicturesCountNumber  === 1 ?<></>: 
    <>
    <img className="arrow arrow_left"  src="/images/slider/arrow_left.24p.svg"  alt="Banner Print-it"   onClick={() => BtClikRight()}/>
		<img className="arrow arrow_right" src="/images/slider/arrow_right24p.svg"  alt="Banner Print-it"   onClick={() => BtClikLeft()}/> 
    
    <div className="chiffre caract-12p">
      <div className="chiffre_e1">{index + 1}</div>
      <div>/</div>
      <div className="chiffre_e2">{SliderPictures.length}</div> 
    </div>
    </> 

    }		
</div>
</>
  );
}
export default SliderHome
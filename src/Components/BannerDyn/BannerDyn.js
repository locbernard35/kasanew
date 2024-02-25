
import './BannerDyn.css'

function BannerDyn(props){

 const BannerDynImg1  =props.BannerDynImg1;
 const BannerDynTxt1  =props.BannerDynTxt1;

//jsx
return (
  <>
  <div className="BannerDyn-g">		
      <div className="BannerDyn-g_1">
       < img className='BannerDyn-g_1_1' src={BannerDynImg1} alt='montagne'/>
      </div>
      <div className="BannerDyn-g_2"></div>                    
      <div className='BannerDyn-g_3'><p className='BannerDyn-g_3_1'>{BannerDynTxt1}</p> </div>           
  </div>	  
  </> 
  );
}
export default BannerDyn

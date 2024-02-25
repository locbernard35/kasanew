
import './Banner.css'
import BannerImg1 from '../../Components/Banner/img/BannerHome.svg' // Webpack => hache
function Banner(props){

//jsx
return (
  <>
  <div className="Banner-g">		
      <div className="Banner-g_1">
       < img className='Banner-g_1_1' src={BannerImg1} alt='montagne'/>
      </div>
      <div className="Banner-g_2"></div>    
       
      <div className='Banner-g_3'><p className='Banner-g_3_1'>Chez vous, partout et ailleurs</p> </div>           
  </div>  
  </> 
  );
}
export default Banner
